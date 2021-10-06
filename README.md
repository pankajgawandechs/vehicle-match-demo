# vehicle-match-demo

# how to install ?
1) Take a pull from git.
2) Run npm install
3) Run npm start
4) Once the server started http://localhost:3000/ on brower, you should see the result.


# Task
The task is to implement a vehicle matching algorithm in Node.js that finds the car id's (one or many) of the vehicle types.

# Technology 
We have used nestjs https://nestjs.com/ for this task.

Explanation: We have kept two constants for vehicles and vehicle types. basically in live application this data can come from csv or database but here for simplicity we are taking data from constants so we can write algorithm for matching vehicles.
To match vehicles and vehicle type we have used vehicle model and vehicle type name. If you want to use other fields we can use those as well. Whichever car ids matches we have listed then in the browser. 
