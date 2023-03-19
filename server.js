
const express = require('express');
const nodemailer = require('nodemailer')
const http = require('http');
const cors = require('cors');
const path = require('path')

const PORT = process.env.PORT || 8080;

const app = express()
const server = http.createServer(app);

// setting up the sockets
app.use(cors())
app.use(express.json({limit: "25mb"}))
app.use(express.urlencoded({limit: "25mb"}))
app.use(express.static(path.join(__dirname,"./build")))
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})

    function sendmail(order){
        return new Promise((resolve, reject)=>{
            const transport = nodemailer.createTransport({
                service:"gmail",
                auth:{user:'goldenderrick95@gmail.com',
                    pass: 'xirujlqotqhcttht' }
        
            })
            const mailOptions = {
                
                to: 'goldenderrick95@gmail.com',
                subject: 'painting',
                html: `<h1>The order ${JSON.stringify(order)} </h1>`
            }
            const result = transport.sendMail(mailOptions)
            
            return result.then(data =>{
                console.log(data.response)
                if(/250 2.0.0 OK/.test(data.response)){
                    return resolve({success: data.response})
                }else{
                    return reject({error: "Failed"})
                }
                }).catch(err =>{
                    console.log(err)
                return reject({error: "Failed"})
            })
        })
    }
        // console.log(order)

    app.get('/', (req,res) =>{
        sendmail("Hello")
        .then(data => res.send(data.success))
        .catch(error => res.status(500).send(error.error))
    })
    app.post("/send_email",(req,res) =>{
        console.log("sending email")
        sendmail(req.body)
        .then(data => res.send(data.success))
        .catch(error => res.status(500).send(error.error))
    })
server.listen(PORT,()=>console.log("Listening on port", PORT))