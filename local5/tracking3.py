'''
https://docs.google.com/document/d/16AD64b54kswYL8VAmAuxTwmCFlBQ4tmSHcakmWs-Y5w/edit
'''

import numpy as np
import cv2              #
                        # pip install pycamera
import imutils          # pip install imutils
from imutils.video import VideoStream
from imutils.video import FPS

import os
import time
import math

from picamera.array import PiRGBArray
from picamera import PiCamera
import io

## pi stuff main
# initialize the camera and grab a reference to the raw camera capture
camera = PiCamera()
camera.resolution = (640, 480)
camera.framerate = 32
rawCapture = PiRGBArray(camera, size=camera.resolution)
time.sleep(0.1)

######## MAIN
create = None
filename = "streetCrossing.mp4"
yolo = "yolov3/"
opVidName = "output_vid.mp4"
opImgName = "output_frame"

#cap = cv2.VideoCapture(filename)
#cap = cv2.VideoCapture(0)
time1 = time.time()

#cap = VideoStream(src=0).start()
#cap = VideoStream(usePiCamera=True).start()

vidHeight = 0
vidWidth  = 0

# assuming low incline shot
# estimate "depth" difference and take horizontal centre difference
# use pythagoras to find distance

# take pixel answer and multiply by average height of boxes to represent avg human height
# heights are dims1[1] and dims2[1]
avgHumanHeight = 170  # in cm --> required 2.0 = 200cm separation for False
minDistance = avgHumanHeight  # in cm --> required 2.0 = 200cm separation for False

viewAngle = 37.8 # vertical camera FOV in degrees, 35mm => ~37.8º, 50mm => ~27º

# calculate theoretical baseDistance to have the person just fully in frame
# tan(viewAngle/2) = (avgHumanHeight/2) / baseDistance
#   /         ]
#  /     x    ]     α = viewAngle
# < α --------] h   h = avgHumanHeight
#  \          ]     x = baseDistance
#   \         ]
baseDistance = (avgHumanHeight / 2.0) / abs( math.tan( (viewAngle*3.141592654/180.0) / 2.0 ))
print("basedistance   " + str(baseDistance))

#print(math.cos(3.141592654/2))
#
#quit()

#
# THUS: if the person was baseDistance cm away from camera, their box should be vidHeight high (in px)
################################################################################################
curDist = 0
def isTooClose(c1,dims1, c2,dims2):  # true => red  : false => green

    # so distance from camera of each person can be found
    # by ratio of their box height (px) to the camera height (px)
    #    ==> i.e.  baseDist/vidHeight(px) = (baseDist+depth)/boxheight(px)
    #        thus isolate for depth
    
    depth1 = ( baseDistance/vidHeight - baseDistance/dims1[1] ) * dims1[1]
    depth2 = ( baseDistance/vidHeight - baseDistance/dims2[1] ) * dims2[1]
    depthDist = (depth1 - depth2)  # in cm
    depthDist *= depthDist        # scale this up as it's more important
    
    # two people 50px apart will vary greatly if they're 5km or 5cm away from camera
    # size is proportional to distance, so take average box height
    avgBoxHeight = (dims1[1] + dims2[1])/2
    # use the average box height as a scale to measure their horizontal px distance
    horzDist = (c1[0] - c2[0])/avgBoxHeight * avgHumanHeight;
    
    totalDist = (depthDist**2 + horzDist**2) ** 0.5
    print(totalDist)
#    curDist = totalDist
    if ( totalDist < minDistance):
        return True
    else:
        return False
    
    ######
#        print ("yc: " + str(c1[1]) + " + " + str(dims1[1]//2), end = "")
#        print (" ==> y pos " + str (c1[1] + dims1[1]//2))
#        print ("x pos " + str (c1[0] + dims1[0]//2))
    #    + " x pos " + str(c2[1] + dims2[1]//2))

        
######## no clue
def Setup(yolo):
    global net, ln, LABELS
    weights = os.path.sep.join([yolo, "yolov3.weights"])
    config = os.path.sep.join([yolo, "yolov3.cfg"])
    labelsPath = os.path.sep.join([yolo, "coco.names"])
    LABELS = open(labelsPath).read().strip().split("\n")
    LABELS = ["person", "bicycle", "car", "motorbike", "aeroplane", "bus", "train", "truck", "boat", "traffic light", "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat", "dog", "horse", "sheep", "cow", "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee", "skis", "snowboard", "sports ball", "kite", "baseball bat", "baseball glove", "skateboard", "surfboard", "tennis racket", "bottle", "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple", "sandwich", "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "sofa", "pottedplant", "bed", "diningtable", "toilet", "tvmonitor", "laptop", "mouse", "remote", "keyboard", "cell phone", "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors", "teddy bear", "hair drier", "toothbrush"]

    net = cv2.dnn.readNetFromDarknet(config, weights)
    ln = net.getLayerNames()
    ln = [ln[i[0] - 1] for i in net.getUnconnectedOutLayers()]
#    person_ind = [i for i, cls in enumerate(net.classes) if cls == 'person'][0]
    
    
######## Process one frame/img?
def ImageProcess(image,frameno):
    countPpl = 0
    infractions = 0

    global processedImg
    (H, W) = (None, None)

    frame = image.copy()
    if W is None or H is None:
        (vidHeight, vidWidth) = frame.shape[:2]
        
    blob = cv2.dnn.blobFromImage(frame, 1 / 255.0, (416, 416), swapRB=True, crop=False)
    net.setInput(blob)
    starttime = time.time()
    layerOutputs = net.forward(ln)
    stoptime = time.time()
    print("Video Frame# " + str(frameno) + " is Getting Processed at {:.4f} seconds per frame".format((stoptime-starttime)))
    confidences = []
    outline = []
    
    for output in layerOutputs:
        for detection in output:
        
            scores = detection[5:]
            maxi_class = np.argmax(scores)
            confidence = scores[maxi_class]

            if LABELS[maxi_class] == "person":
                if confidence > 0.6:
                
#                    print (confidence,)
                    box = detection[0:4] * np.array([vidWidth, vidHeight, vidWidth, vidHeight])
                    (centerX, centerY, width, height) = box.astype("int")
                    if (width*height < 25): # too small to see
                        continue;
                        
                    x = int(centerX - (width / 2))
                    y = int(centerY - (height / 2))
                    outline.append([x, y, int(width), int(height)])
                    confidences.append(float(confidence))

    box_line = cv2.dnn.NMSBoxes(outline, confidences, 0.5, 0.3)
    if len(box_line) > 0:
        flat_box = box_line.flatten()
        pairs = []
        status = []
        center = []      # center stores center [x,y] for each box found

        # added dimensions --> [w,h] for each box found
        dims = []
        
        for i in flat_box:
            (x, y) = (outline[i][0], outline[i][1])
            (w, h) = (outline[i][2], outline[i][3])
            center.append( [int(x + w / 2), int(y + h / 2)] )
            
            dims.append( [w,h] )
            
            status.append(False)
            
        # use isTooClose() on every found pair of boxes
        for i in range(0,len(center)):
            for j in range(i+1,len(center)):

                # close = isTooClose(center[i], center[j])  # OLD: calculates based off centres only

                # we pass center1, dims1, center2, dims2 => dims for sizes
                close = isTooClose(center[i],dims[i], center[j],dims[j]);
                if close:
                    pairs.append([center[i], center[j]])
                    status[i] = True
                    status[j] = True
                    
        # colour boxes red or green based on isTooClose() method for each pair
        index = 0
        print (vidWidth)
        
#        cv2.rectangle(frame, (0, 0), (int(vidWidth)-5, int(vidHeight)-5), (255, 255, 255), 2)

        countPpl = len(flat_box)
        infractions = 0
        for i in flat_box:
            (x, y) = (outline[i][0], outline[i][1])
            (w, h) = (outline[i][2], outline[i][3])
            
            if status[index] == True:
                cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 0, 150), 2)
                infractions += 1
                
            elif status[index] == False:
                cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
                
            index += 1
        for h in pairs:
            cv2.line(frame, tuple(h[0]), tuple(h[1]), (0, 0, 255), 2)
            
    processedImg = frame.copy()
    rawCapture.truncate(0)
    
    return (countPpl, infractions)
    
# set to true to control frame by frame
# d (+ enter) for Previous Frame, or just enter for Next Frame
framebyframemode = False

frameno = 0
busynessPerc = 0
imgNum = 1

stream = io.BytesIO()
#for curFrame in camera.capture_continuous(rawCapture, format="bgr", use_video_port=True):
for curFrame in camera.capture_continuous(stream, format="jpg"):
    
    print("heck ya bbq sauce")
    
    frame = curFrame.array
    current_img = curFrame.array

#    print (str(vidHeight) + ' ' + str(vidWidth))
#    frame = cap.read()

#    current_img = frame.copy()
    
    
    video = current_img.shape
    frameno += 1
    
    #### change this to skip ahead
    startfrom = 1
    if frameno < startfrom:
        continue
    
    step = 1
    if( (frameno%step == 0 or frameno == startfrom) and frameno > startfrom):
    
        print()
        Setup(yolo)
        stats = ImageProcess(current_img, frameno)
        pplDetected = stats[0]
        infracsDetected = stats[1]
        if pplDetected != 0:
            ratio = infracsDetected/pplDetected
        else:
            ratio = 1
        
        movingAvg = 3     # avgish from before  + this frame                account for low # ppl
        busynessPerc = (busynessPerc * (movingAvg-1) + ratio) / movingAvg * min(1,(pplDetected/7))
        
        # font attributes #####################################################
        ''' font options:
            stackoverflow.com/questions/37191008/load-truetype-font-to-opencv
        '''
        font                   = cv2.FONT_HERSHEY_COMPLEX
        fontScale              = 1.3 * processedImg.shape[1]/1920
        fontColor              = (0,0,0)
        infracColor            = (0, min( 220,2*220*(1-ratio) )/1.2,       min( 255,3*255*(ratio) )/1.2)
        busynessColor          = (0, min( 220,2*220*(1-busynessPerc) )/1.2, min( 255,3*255*(busynessPerc) )/1.2)
        lineType               = 2 #cv2.LINE_4
        
        # dimensions of text/strings ##########################################
        detectedStr    = "Total detected: " + str(pplDetected)
        infractionsStr =    "Infractions: " + str(infracsDetected)
        busynessStr    =     "Congestion: " + str((int)(busynessPerc*100)) + "%"
            
        det_s = cv2.getTextSize("Total detected:", font, fontScale, lineType)[0]  # just
        inf_s = cv2.getTextSize(   "Infractions:", font, fontScale, lineType)[0]  # here
        bus_s = cv2.getTextSize(   "Infractions:", font, fontScale, lineType)[0]  # to align
        offset1 = det_s[0] - inf_s[0]                                             # colons
        offset2 = det_s[0] - bus_s[0]                                             # l o l
        
        # assuming same font throughout, length is just of longest string (heights are the same)
        txtDims, txtbaseline = cv2.getTextSize("Total detected: 100%", font, fontScale, lineType)
        txtW = txtDims[0] # length
        txtH = txtDims[1] # height
        gapBtwnLines = txtH//2

        # drawing shapes and text  ############################################
        # we want everything to start 10px from top and from left
        # rectangles are drawn from topleft corner, text is from bottom left
        cv2.rectangle(processedImg, (10,10),   (10+txtW, 25+txtH*3+gapBtwnLines*2),   (255, 255, 255), -10)  # -1 to fill
        
        cv2.putText(processedImg,    detectedStr, (15        ,15+txtH),                font, fontScale,fontColor, lineType)
        cv2.putText(processedImg, infractionsStr, (15+offset1,15+txtH*2+gapBtwnLines), font, fontScale,infracColor, lineType)
        cv2.putText(processedImg,    busynessStr, (15+offset2,15+txtH*3+gapBtwnLines*2), font, fontScale,busynessColor, lineType)
        
        # update player, write to video #######################################
        Frame = processedImg
        cv2.imshow("Playback", Frame)
        
        
        if False: # write images to folder
            print("here")
            cv2.imwrite(opImgName + str(imgNum) + ".jpg" ,Frame)
            imgNum += 1
 
        if True: # write video to folder
            if create is None:
                fourcc = cv2.VideoWriter_fourcc(*'mp4v')#)'h264')#'XVID')
                create = cv2.VideoWriter(opVidName, fourcc, 30, (Frame.shape[1], Frame.shape[0]), True)
        
    else:
        continue
    
    create.write(Frame)
    
    if framebyframemode == True:
        key = input("\nd + enter for PREV   or     enter for NEXT    or q to quit")
        if key == "":
            continue
            
        if key[0] == 'd':
            frameno -= step
        elif key[0] == 'q':
            break

    if cv2.waitKey(1) & 0xFF == ord('s'):
        break
        
    rawCapture.truncate(0)
    stream.truncate()
    stream.seek(0)

        
        
time2 = time.time()
print("Completed. Total Time Taken: {} minutes".format((time2-time1)/60))
cap.release()
cap.stop()
cv2.destroyAllWindows()
