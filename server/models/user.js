
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    Firstame: String,
    lastname:String,
    username: String,
    email: String,
    password: String


})

const User = mongoose.model("User",userSchema);
//Register & Create
async function register(username,password)
{
    const user = getUser(username);
    console.log(user);
    console.log(user[0]);
    if(user[0]) throw Error('Username already Exists');

    const newUser = await User.create({
        username: username,
        password: password
    });

    return newUser
}
//Login & Read
async function login(username,password)
{
    const user = await User.findOne({"username":username});
    if(!user) throw Error('User not found');
    if(user.password != password) throw Error('Incorrect Password');

    return user;
}

//Update

async function updatePassword(id,password)
{
    const user = await User.updateOne({"_id":id},{$set:{password:password}})
    return user;
}

//Delete

async function deleteUser(id)
{
    await user.deleteOne({"_id":id});
};

async function getUser(username)
{
    return await User.findOne({"username":username});
}

//Export

module.exports ={register,login,updatePassword,deleteUser};
