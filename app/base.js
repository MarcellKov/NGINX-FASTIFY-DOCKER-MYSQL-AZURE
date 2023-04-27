import fast from "fastify"
import {createConnection} from "mysql"

const conn=createConnection({host:"mysql",port:"3306",database:"PROBA",user:"root",password:"Matyas53",})

const app=fast()

app.listen({port:parseInt(process.argv[2]),host:"0.0.0.0"})
console.log(process.argv[2])
app.get("/",()=>{return "Server from"+process.argv[2]})
app.get("/db",()=>{
    conn.query("SELECT * from emberek",function e(err,results){
        if (err) throw err
        console.log(results)
    })
})