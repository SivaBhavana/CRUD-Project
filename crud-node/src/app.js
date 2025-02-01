const express = require('express')
//const {connectedToMongoDB}=require('./configuration/dbConfig');
const bodyParser=require("body-parser");
const userRoutes=require("../src/routes/userRoute")
const cors=require("cors");
const app= express();
const PORT=process.env.PORT || 5000;


app.use(cors());
// app.use(express.json()); // Built-in middleware to parse JSON requests
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
// connectedToMongoDB().then(()=>{
//     app.listen(PORT,()=>{
//         console.log(`Server running on port ${PORT}`);
//     })
// })
app.use("/api/user",userRoutes);
app.listen(PORT,()=>{
             console.log(`Server running on port ${PORT}`);
        })

