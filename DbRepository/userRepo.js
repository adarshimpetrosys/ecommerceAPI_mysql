const db          = require("../models/index");
const User        = db.user;
const Useraddress = db.useraddress;

const userRepo = {
  async add(bodyData,mobileOTP,emailOTP,hashedPass) {
    try {
    // console.log(mobileOTP)
    // console.log(emailOTP)

      const exist = await User.findOne({
        where: {
          email: bodyData.email,
        },
        });

        if(exist){
          return { emailexists: true}
        }
        else{

      const document = User.build({
        firstName  : bodyData.firstName,
        lastName   : bodyData.lastName,
        mobile     : '+91'+bodyData.mobile,
        email      : bodyData.email,
        password   : hashedPass,
        mobileOTP,
        emailOTP

      });

      var user = await document.save();

      if (user) {
       var data = Useraddress.build({
       addressLine1 : bodyData.addressLine1,
       addressLine2 : bodyData.addressLine2,
       city         : bodyData.city,
       postalCode   : bodyData.postalCode,
       country      : bodyData.country,
       telephone    : bodyData.telephone,
       UserId       : user.id
        });

      var savedata = await data.save();

      return {user,savedata}
      }

      } 
    } catch (error) {
      return error
    }
  },


  async otpverification(bodyData){

    const {email,emailOTP} = bodyData;
    // console.log(bodyData.emailOTP)
    const getuser  = await User.findOne({
      where: {
        email: email,
      },
      });

      if(getuser){
  //  console.log(parseInt(getuser.emailOTP))
     if(parseInt(emailOTP) === parseInt(getuser.emailOTP)){
      let  updateData =  await User.update(
        {
          emailOTP     : "",
          emailverify  : true,
        },
        {
          where:{
          id: getuser.id,
        }
      });
     return { status:200,message: "Email Verified Successfully", success: true }
     }
     else{
      return {status:400,message:"Invalid OTP",success:false}
     }
    }else{
      return {status:404, message:"User Not Found ",success:false}
    }

  

      
  },

  
  async mobotpverification(bodyData){

    const {mobile,mobileOTP} = bodyData;
    const getuser  = await User.findOne({
      where: {
        mobile: "+91"+mobile,
      },
    });
    
    // console.log(parseInt(mobileOTP))
    // console.log(mobile)
    // console.log(getuser)

      if(getuser){
     if(parseInt(mobileOTP) === parseInt(getuser.mobileOTP)){
      let  updateData =  await User.update(
        {
          mobileOTP     : "",
          mobileverify  : true,
        },
        {
          where:{
          id: getuser.id,
        }
      });
     return { status:200,message: "Mobile Verified Successfully", success: true }
     }
     else{
      return {status:400,message:"Invalid OTP",success:false}
     }
    }else{
      return {status:404, message:"User Not Found ",success:false}
    }

  

      
  }
};

module.exports = userRepo;
