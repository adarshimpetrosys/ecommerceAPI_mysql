const Joi            = require("joi");
const userRepo       = require("../DbRepository/userRepo")
const transporter    = require("../config/emailConfig")
const bcrypt         = require("bcryptjs");
const crypto         = require('crypto');
// var unirest          = require("unirest");
// const twilio = require('twilio');

// const accountSid = 'AC6656622adc38e50a2c953d609193d72c';
// const authToken = '7b56dc68b64d40e2ce04ebf83fddfe01';
// const client = twilio(accountSid, authToken);


function generateOTP() {
  // Generate a 6-digit random number (OTP)
  return Math.floor(100000 + Math.random() * 900000);
}


const userController = {

async register(req, res) {
    console.log(req.body)
 

       userSchema   = Joi.object({
       firstName    : Joi.string().min(3).max(30).required(),
       lastName     : Joi.string().min(3).max(30),
       mobile       : Joi.number().required(),
       email        : Joi.string().email(),
       password     : Joi.string().required(),
       user_id      : Joi.number(),
       addressLine1 : Joi.string().required(),
       addressLine2 : Joi.string().required(),
       city         : Joi.string().required(),
       postalCode   : Joi.number().required(),
       country      : Joi.string().required(),
       telephone    : Joi.number(),
     
    });

    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }


    // otp 
    const mobileOTP = generateOTP();
    const emailOTP  = generateOTP();
    // console.log(mobileOTP)
    // console.log(emailOTP)
    
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const data      = await userRepo.add(req.body,mobileOTP,emailOTP,hashedPass);

    if(data.emailexists){
      res.status(200).json({ message: "Email is Already Exists", success: false });
    }
    else{
    if (data) {
       res.status(200).json({ message: "You have been registered, we have sent you an OTP, please check your email and phone.", data: data, success: true });



      // console.log(data.user.mobileOTP)
      // console.log(data.user.emailOTP)

  // Send Email
  let info = await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to:data.user.email,
    subject: "Shopkart - OTP Verification mail",
    html: `
    <div
  style={{
    fontFamily: "Helvetica,Arial,sans-serif",
    minWidth: 1000,
    overflow: "auto",
    lineHeight: 2
  }}
>
  <div style={{ margin: "50px auto", width: "70%", padding: "20px 0" }}>
    <div style={{ borderBottom: "1px solid #eee" }}>
      <a href=""   style={{fontSize: "1.4em",color: "#00466a", textDecoration: "none", fontWeight: 600}} >
     Shopkart </a>
    </div>
    <p style={{ fontSize: "1.1em" }}>Hi,</p>
    <p> Thank you for choosing Our Brand. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
    <h2 style={{background: "#00466a",margin: "0 auto",width: "max-content",  padding: "0 10px",color: "#fff",
        borderRadius: 4 }}  >
   ${ data.user.emailOTP} </h2>
    <p style={{ fontSize: "0.9em" }}>  Regards,<br />
    Shopkart
    </p>
    <hr style={{ border: "none", borderTop: "1px solid #eee" }} />
    <div
      style={{float: "right",   padding: "8px 0", color: "#aaa",  fontSize: "0.8em",lineHeight: 1,
        fontWeight: 300
      }}  >
      <p>Shopkart Inc</p>
      <p>1600 Amphitheatre Parkway</p>
      <p>California</p>
    </div>
  </div>
</div>
`
  });




  // // MobileOTP sending 

  // const phoneNumber = data.user.mobile; // The destination phone number (with country code)

  // client.messages
  //   .create({
  //     body: `Your OTP is:  ${ data.user.mobileOTP}`,
  //     from: '+12056541636',
  //     // to: phoneNumber
  //   })
  //   .then(message => console.log(message.sid))
  //   .catch(error => console.error(error));

   

      } else {
        res.status(404).json({ message: "Insert Failed", success: false });
      }
   }
  },


  async otpVerification(req,res){
    // console.log(req.body.emailOTP)
    // console.log(req.body.mobileOTP)
    const data =   await  userRepo.otpverification(req.body);
    // console.log(data)
    res.status(200).json(data)
  },
  
  async mobotpverification(req,res){
    // console.log(req.body.emailOTP)
    // console.log(req.body.mobileOTP)
    const data =   await  userRepo.mobotpverification(req.body);
    // console.log(data)
    res.status(200).json(data)
  }
 
};

module.exports = userController;
