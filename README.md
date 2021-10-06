# vehicle-match-demo

# how to install ?
1) Take a pull from git.
2) Run npm install
3) Run npm start
4) Once the server started http://localhost:3000/ on browser, you should see the result.


# Task
The task is to implement a vehicle matching algorithm in Node.js that finds the car id's (one or many) of the vehicle types.

# Technology 
We have used nestjs https://nestjs.com/ for this task.

# Explanation
We have kept two constants for vehicles and vehicle types. In live application this data can come from csv or database but here for simplicity we are taking data from constants so we can write algorithm for matching vehicles.
To match vehicles and vehicle type we have used vehicle model and vehicle type name. If you want to use other fields we can use those as well. You can select the vehicle type name from the drop down, and based on your selection, vehicles and their car ids will be listed.