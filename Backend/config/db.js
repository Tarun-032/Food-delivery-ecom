import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://sanika21comp:sanika121103@cluster0.4eoyu.mongodb.net/food-del-ecom').then(()=>console.log("DB Connected"));
}