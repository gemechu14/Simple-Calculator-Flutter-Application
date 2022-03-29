const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const aothRoute=require("./routers/auth"); 
const userRoute=require("./routers/user");
const postRoute=require("./routers/post");
const catagoriyRoute= require("./routers/catagories");

const multer=require("multer");
const path=require("path");

dotenv.config();

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_DB, 
{   useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:true
}).then(console.log("connected to mongodb"))
.catch((error)=>console.log(console.log(error)));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  })


app.use("/api/auth",aothRoute);
app.use("/api/user",userRoute);
app.use("/api/post",postRoute);
app.use("/api/catagories",catagoriyRoute);


app.listen("5000",()=>{

    console.log("Backend is Running");
});



