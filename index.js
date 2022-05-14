///////dependencies///////
const mysql =require("mysql");
const inquirer = require("inquirer");

 ///////connect to db///////
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user:"root",
    password: "Nikamaxik1605!",
    database:"railway_reserv_sys"
});

connection.connect(function (err) {
    if (err) {
        console.log("connecting err:" + err);
    }
    viewAll();
})
   ////////display all trains////////
 function viewAll() {
     inquirer.prompt ([
         {
         type: "confirm",
         name: "confirm",
         message: " Would you like to know about the Train`s schedule?",
        default: true
        }
     ]).then(function(user) {
         if (user.confirm=== true) {
             connection.query("SELECT * FROM `train`", function (err, data){
if (err) throw err;
console.table(data);
askForID(data);
             });
         }else {
             console.log("Pease Return again. We appreciate your Business");
         }
     })
    };

 ////////Print first name and last name of all those user who booked ticket for Inter-city express////////
 function viewAll() {
    inquirer.prompt ([
        {
        type: "confirm",
        name: "confirm",
        message: " Would you like to know about all passenger who booked ticket for Inter-city express?",
       default: true
       }
    ]).then(function(user) {
        if (user.confirm=== true) {
            connection.query("SELECT train_name, first_name, last_name FROM `user`, `train`, `ticket` WHERE train_name LIKE 'Inter-City Express'",
            
             function (err, data){
if (err) throw err;
console.table(data);
askForID(data);
            });
        }else {
            console.log("Please Return again!");
        }
    })
   };
 
//display details of all users who canceled tickets for train no------//
function viewAll() {
    inquirer.prompt ([
        {
        type: "confirm",
        name: "confirm",
        message: " Would you like to know about all passenger who canceled tickets for train ?",
       default: true
       }
    ]).then(function(user) {
        if (user.confirm=== true) {
            connection.query("SELECT * from `user` , `cancel`,`ticket` WHERE train_no LIKE 12711",
            
           
            
             function (err, data){
if (err) throw err;
console.table(data);
askForID(data);
            });
        }else {
            console.log("Please Return again!");
        }
    })
   };