const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/robotics",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}
)
.then(()=>{
    console.log("ho gya");
})
.catch((e)=>{
    console.log(e);
})