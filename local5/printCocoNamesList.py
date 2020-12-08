
line = input('')
names = []
while line != "-":
#    print(line + ", ")
    line = line.rstrip("\n")
    names += [line]
    line = input()
    
for i in range(len(names)):
    print('"' + names[i] + '"' + ", ",end='')
    
