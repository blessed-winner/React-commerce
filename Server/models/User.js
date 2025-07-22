const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name:{
        type:String, 
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})

userSchema.pre('save',async function(next){ 
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

userSchema.statics = {
    login:async function(email,password){
        const empty = "";
        const user = await this.findOne({email})
        
        if(user){
            const authUser = await bcrypt.compare(password,user.password);
            if(authUser){
                return user
            }
        }
        throw new Error("Incorrect email or password");
    }
}

const User = mongoose.model('User',userSchema);

module.exports = User;
