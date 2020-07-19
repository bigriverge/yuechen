const Controller = require('egg').Controller;

class EmployeeController extends Controller {

    constructor(ctx) {
        super(ctx);
    }

    async login() {
        const { ctx } = this;
        const payload = ctx.request.body || {};
        const res = await ctx.service.employee.login(payload);
        if (res) {
            ctx.body = res;
        } else {
            ctx.body = {
                status: '10001',
                message: 'user not exist'
            }
        }
    }

    async register() {
        const { ctx } = this; 
        const payload = ctx.request.body || {};
        console.log("log: ", payload);
        const res = await ctx.service.employee.register(payload);
        if(res) {
            ctx.body = {
                status: 200,
                data: res
            }
        }
    }

    async test_get() {
        this.ctx.body = 'test success'
    }

    async test_post() {
        const { ctx } = this;
        const payload = ctx.request.body || {};
        ctx.body = payload;
    }
}

module.exports = EmployeeController;
