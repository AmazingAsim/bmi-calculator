let express=require('express')
let app=express()
let port=process.env.port || 2000

app.use(express.static('./views'))





app.listen(port,()=>{console.log('server is on')})