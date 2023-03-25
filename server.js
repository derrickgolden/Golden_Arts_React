
const express = require('express');
const nodemailer = require('nodemailer')
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io');
const path = require('path')

const PORT = process.env.PORT || 8080;

const app = express()
const server = http.createServer(app);
const io = socketIo(server);

// setting up the sockets
io.on('connection', async (socket)=>{
    console.log("client connected")
    socket.on('order',(order)=>{
        const result = sendmail(order)
        result.then(data =>{
            if(/250 2.0.0 OK/.test(data.response)){
                io.emit("success", {success: data.response})
            }else{
                io.emit("error", {error: "Failed"})
            }
            }).catch(err =>{
                console.log(err)
                io.emit("error", {error: "Failed"})
        })
    })
})

app.use(cors())
app.use(express.json({limit: "25mb"}))
app.use(express.urlencoded({limit: "25mb"}))
console.log(path.join(__dirname,"./build"))
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
                return resolve(data);
                }).catch(err =>{
                    console.log(err)
                return reject(err);
            })
        })
    }
        // console.log(order)

    app.get('/', (req,res) =>{
        sendmail("Hello")
        .then(data => {
            console.log(data)
            res.send(data.success)
        })
        .catch(error => res.status(500).send(error.error))
    })

    app.get("/api", (req, res) => {
        console.log("api log")
        res.json({ message: "Hello from server twice!" });
      });

    // All other GET requests not handled before will return our React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/build', 'index.html'));
    });

    app.post("/send_email", (req,res) =>{
        console.log("sending email")
        sendmail(req.body)
        .then(data => {
            console.log(data)
            console.log(data.success)
            res.send(data.success)
        })
        .catch(error => res.status(500).send(error.error))
    })
server.listen(PORT,()=>console.log("Listening on port", PORT))