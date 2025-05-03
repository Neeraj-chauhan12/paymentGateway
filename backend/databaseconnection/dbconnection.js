const mongoose=require('mongoose')



const connect= async()=>{
   await mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("database is connected");
})
.catch((error)=>{
    console.log("error in mongodb connection")
})

}

module.exports=connect

