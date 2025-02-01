const mongoose = require('mongoose');

// const connectedToMongoDB = async () => {
//   try {
//     await mongoose.connect("mongodb+srv://bhavana123:bhavana123@cluster0.ywuic.mongodb.net/");
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error(`MongoDB Not Connected!! ${error}`);
//   }
// };

// module.exports = { mongoose, connectedToMongoDB };
mongoose.connect("mongodb+srv://bhavana123:bhavana123@cluster0.ywuic.mongodb.net/",{

});

mongoose.connection.on("connected",()=>{
  console.log("Connected to MongoDB")
});
mongoose.connection.on("error",(err)=>{
  console.log(`mongoDB connection error: ${error}`);
});
module.exports = mongoose;