import mongoose from "mongoose";

const usersCollection= 'users';

const usersSchema= new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    username:String,
    age:Number,
    password:String,
    notes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'notes',
        default:[]
    }
    ],
    phone:String
});

usersSchema.pre(['find', 'findOne'],function(){
    this.populate('notes')
})
const usersModel= mongoose.model(usersCollection,usersSchema);
export default usersModel;