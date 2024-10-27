x = int(input("Enter x: "))
for i in range(1,x+1):
  row=[]
  for j in range(0,i):
    row.append(2*j+1)
  print(" ".join([str(x) for x in row]))

