/**
 * 操作记录表
 */

module.exports = app => {

    const mongoose = app.mongoose;
    const RecordSchema = new mongoose.Schema({

        who: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        srcValue: {
            type: String
        },
        dstValue: {
            type: String
        },
        modifyAt: {
            type: Date,
            default: Date.now
        }
    });

    return mongoose.model('Record', RecordSchema);

}