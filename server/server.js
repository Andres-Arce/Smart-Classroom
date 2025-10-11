function Team_name(){
console.log("")
console.log("")
console.log("")
console.log(" /$$      /$$/$$$$$$$$/$$$$$$$$ /$$$$$$  /$$$$$$ /$$      /$$$$$$/$$$$$$$$/$$$$$$  /$$$$$$         /$$$$$$ /$$     /$$/$$$$$$ /$$$$$$$$/$$$$$$$$/$$      /$$")
console.log("| $$$    /$$| $$_____|_____ $$ /$$__  $$/$$__  $| $$     |_  $$_|__  $$__/$$__  $$/$$__  $$       /$$__  $|  $$   /$$/$$__  $|__  $$__| $$_____| $$$    /$$$")
console.log("| $$$$  /$$$| $$          /$$/| $$  \__| $$  \ $| $$       | $$    | $$ | $$  \ $| $$  \__/      | $$  \__/\  $$ /$$| $$  \__/  | $$  | $$     | $$$$  /$$$$")
console.log("| $$ $$/$$ $| $$$$$      /$$/ | $$     | $$$$$$$| $$       | $$    | $$ | $$  | $|  $$$$$$       |  $$$$$$  \  $$$$/|  $$$$$$   | $$  | $$$$$  | $$ $$/$$ $$")
console.log("| $$  $$$| $| $$__/     /$$/  | $$     | $$__  $| $$       | $$    | $$ | $$  | $$\____  $$       \____  $$  \  $$/  \____  $$  | $$  | $$__/  | $$  $$$| $$")
console.log("| $$\  $ | $| $$       /$$/   | $$    $| $$  | $| $$       | $$    | $$ | $$  | $$/$$  \ $$       /$$  \ $$   | $$   /$$  \ $$  | $$  | $$     | $$\  $ | $$")
console.log("| $$ \/  | $| $$$$$$$$/$$$$$$$|  $$$$$$| $$  | $| $$$$$$$$/$$$$$$  | $$ |  $$$$$$|  $$$$$$/      |  $$$$$$/   | $$  |  $$$$$$/  | $$  | $$$$$$$| $$ \/  | $$")
console.log("|__/     |__|________|________/\______/|__/  |__|________|______/  |__/  \______/ \______/        \______/    |__/   \______/   |__/  |________|__/     |__/")   
console.log("")
console.log("")
}

//Librery
import express from "express";
import chalk from "chalk"

//Global configuration
const APP = express();
const PORT = 3000;

//Read directory public
APP.use(express.static("public"));

APP.listen(PORT,()=>{
    //Example of URL: http://localhost:3000/
     Team_name();
     console.log(chalk.green("Server Mezcalitos [ON]"));
     console.log(chalk.yellow(`App 'Mezcalitos.Ucol': http://localhost:${PORT}`));
});

