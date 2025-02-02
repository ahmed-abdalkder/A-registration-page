const { default: mongoose } = require("mongoose");

 

module.exports.connectionDB=()=>{
    
     mongoose.connect("mongodb://localhost:27017/broject-last")
      .then(()=>{

          console.log("connection database");
        
    }).catch((err)=>{

        console.log({msg:"error",err});
        
    })
}
 