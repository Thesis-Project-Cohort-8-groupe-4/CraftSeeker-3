const mysql = require("mysql2")

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "lybov123",
    database: "craftseeker"
})

conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log("connected to craftseeker")
})

module.exports=conn