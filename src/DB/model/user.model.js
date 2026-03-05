import { Schema , model } from "mongoose";
//import { isEmail } from "validator";
import validator from "validator";
import { hash,compare } from "bcrypt";
import crypto from 'crypto';

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']  ///// isEmail
  },
   role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },
  passwordChangedAt: Date,
 
   active: {
    type: Boolean,
    default: true,
    select: false 
  }, 
  otpCode: String,
  otpExpires: Date,
  isVerified: {
    type:Boolean ,
    default:false
  }
});

userSchema.pre('save', async function() {
  if (!this.isModified('password')) return;

  this.password = await hash(this.password, 12);
  this.confirmPassword = undefined;
});

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await compare(candidatePassword, userPassword);
};

//=========CREATING PASSWORD RESET/ CREATE OTP==========
userSchema.methods.createOTP = function() {
  // 1) Generate random 6-digit code
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // 2) Save encrypted version in DB
  this.otpCode = crypto
    .createHash('sha256')
    .update(otp)
    .digest('hex');

  // 3) Expires in 10 minutes
  this.otpExpires = Date.now() + 10 * 60 * 1000;

  // 4) Return plain OTP for the email
  return otp;
};
/* userSchema.methods.createPasswordResetToken = function() {
  // 1) Plain token → goes inside the email link
  const resetToken = crypto.randomBytes(32).toString('hex');

  // 2) Encrypted version → saved in database
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // 3) Expires in 10 minutes
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  // 4) Return plain token for the email
  return resetToken;
}; */


const User = model('User', userSchema);
export default User;