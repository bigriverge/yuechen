/**
 * 用户表 
 */
module.exports = app => {
    
    const mongoose = app.mongoose;
    mongoose.set('useFindAndModify', false);

    const UserSchema = new mongoose.Schema({
        mobile: {
            type: String,
            unique: true,
            required: true
        },
        nickName: {
            type: String,
            default: ''
        },
        score: {
            type: Number,
            default: 0
        },
        createAt: {
            type: String
        }
    });

    return mongoose.model('User', UserSchema);
};