const Controller = require('egg').Controller;

class UserController extends Controller {

    constructor(ctx) {
        super(ctx);
    }

    async registerUser() {
        const { ctx } = this;
        await ctx.render('register.nj', {});
    }

    async register() {
        const { ctx } = this; 
        const payload = ctx.request.body || {};
        console.log("log: ", payload);
        const res = await ctx.service.user.register(payload);
        if(res) {
            ctx.body = {
                status: 200,
                data: res
            }
        }
        console.log("success: ", res);
    }

    async queryScore() {
        const { ctx } = this;
        const payload = ctx.request.body || {};
        console.log('queryScore ', payload);
        const res = await ctx.service.user.query(payload);
        if(res) {
            ctx.body = {
                status: 200,
                data: res
            }
        } else {
            ctx.body = {
                status: 10001
            }
        }
    }

    async data() {
        const { ctx } = this;
        const res = await ctx.service.user.data();
        if(res) {
            ctx.body = {
                status: 200,
                data: res
            }
        } else {
            ctx.body = {
                status: 10001
            }
        }
    }

    async findUser(condition) {
        const { ctx } = this;
        console.log('find user');
        const res = await ctx.service.user.findUser(condition);
        if(res) {
            ctx.body = {
                status: 200,
                data: res
            }
        } else {
            ctx.body = {
                status: 10001
            }
        }
    }

    async updateUser() {
        const { ctx } = this;
        const payload = ctx.request.body || {};
        const res = await ctx.service.user.updateUser(payload);
        console.log('controller update: ', res);
        if(res) {
            ctx.body = {
                status: 200,
                data: res
            }
        } else {
            ctx.body = {
                status: 10001
            }
        }
    }

    async deleteUser() {
        const { ctx } = this;
        const payload = ctx.request.body || {};
        const res = await ctx.service.user.deleteUser(payload);
        console.log('controller delete: ', res);
        if(res) {
            ctx.body = {
                status: 200,
                data: res
            }
        }
    }
}

module.exports = UserController;
