const fast=require("fastify")
const cosmos=require("@azure/cosmos")


const conn=new cosmos.CosmosClient({endpoint:"https://kovacsmarcelldb.documents.azure.com:443/",key:"SvU97wOPDwtK9jJBpZYn7v11EHBlrynHvszwOSSK5mGJ8jLp3rRTKpa7uWg7d0652ztpQVRClp0eACDb8FyWyA=="})
const db=conn.database("munkak")
const container=db.container("munkak")



const app=fast()

app.register(require("@fastify/cors"),{origin:'*',methods:["GET"]})

app.listen({port:parseInt(process.argv[2]),host:"0.0.0.0"})

console.log(process.argv[2])

app.get("/",()=>{return "AZURE Server from"+process.argv[2]})
app.get("/test",()=>{return "TEST ROUTE"})

app.get("/db",async ()=>{
    var items=await container.items.query("Select * from munkak").fetchAll()
    console.log(items["resources"])
    return items["resources"]
})

app.post("/db/:id/:name",async (req,res)=>{
    var name=req.params.name
    var id=req.params.id
    console.log(name)
    console.log(id)
    await container.items.create({"id":id,"name":name})
    return "SUCCESFUL WRITE!"
})
