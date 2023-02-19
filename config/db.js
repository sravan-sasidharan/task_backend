const mongoose=require('mongoose');
const connectDB = async () =>{
    try {
        const conn=await mongoose.connect('mongodb+srv://sravan:sravan123@cluster0.vk3vxtu.mongodb.net/Job?retryWrites=true&w=majority');
        console.log(`mongoose connected ${conn.connection.host}`);
    } catch (error) {
        console.log(`error:${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;