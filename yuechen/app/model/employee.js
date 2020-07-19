/**
 * 内部员工表
 */

 module.exports = app => {

    const mongoose = app.mongoose;
    mongoose.set('useFindAndModify', false);

    const EmployeeSchema = new mongoose.Schema({
        username: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: 'normal'
        }
    });

    return mongoose.model('Employee', EmployeeSchema);
 }