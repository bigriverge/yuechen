const Service = require('egg').Service;

const { decodeString } = require('../utils/encrypt')

class EmployeeService extends Service {

    /**
     * 登录校验
     * @param {*} payload 
     */
    async login(payload) {
        const { ctx } = this;

        let query = await ctx.model.Employee.findOne({
            username: payload.username
        });

        if (query) {
            console.log('decode string ', decodeString(query.password))
            if(query.password === payload.password) {
                // 登录成功
                return {
                    status: 200
                }
            } else {
                return {
                    status: 10001, //用户名或密码错误
                    message: 'user not exist'
                }
            }
        } else {
            return {
                status: 10001, //用户名或密码错误
                message: 'user not exist'
            }
        }
    }

    async register(payload) {
        const { ctx } = this;
        return ctx.model.Employee.create(payload);
    }
}

module.exports = EmployeeService;