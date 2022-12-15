const userModel = require("./user.model");

class UserDao {

    constructor(){

    }
    // create user
    async createUser(obj){
        let user = new userModel({
            name: obj.name,
            email: obj.email,
            address: obj.address,
            userType:obj.userType,
            password: obj.password
        });
        let result =  await user.save();
        return result;
       
    }
    
    // get user
    async getUser(id){
        let result = await userModel.findById(id);
        return result;
    }
    // get all users
    async getUsers(){
        let result = await userModel.find();
        return result;
    }
    // edit user
    async editUser(id,obj){
        let {name, email,address,userType,password}= obj;
        let result = await userModel.findByIdAndUpdate({_id:id},{$set:{name, email,address,userType,password}});
        return result;
    }
    // delete user
    async deleteUser(id){
        let result = await userModel.findByIdAndDelete(id);
        return result;
    }
    // login user
    async login({email,password}){
        let result = await userModel.findOne({email,password});
        return result;
    }


}

module.exports = new UserDao();
