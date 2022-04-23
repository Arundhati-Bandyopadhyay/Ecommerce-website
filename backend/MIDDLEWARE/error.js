const ErrorHandeler=require("../utils/errorhandeler")

module.exports = (err,req,res,next)=>{
    err.statuscode=err.statuscode || 500;
    err.message=err.message || " internl server error"

    //wrong mongodb id error 
    if(err.name==="CastError"){
        const message=`resource not found invalid: $(err.path)`;
        err=new ErrorHandeler(message,400)
    }

    res.status(err.statuscode).json({
        sucess:false,
        Message:err.message,
    });

}