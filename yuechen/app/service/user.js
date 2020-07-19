const Service = require('egg').Service;

class UserService extends Service {

    /**
     * 用户注册
     * @param {*} payload 
     */
    async register(payload) {
        const { ctx } = this;

        payload.createAt = new Date().toLocaleString();

        //校验 手机验证码

        return ctx.model.User.create(payload);
    }

    /**
     * 查找用户
     * @param {*} id 
     */
    async find(id) {
        const { ctx } = this;
        return ctx.model.User.findById(id)
    }

    /**
     * 删除用户
     * @param {*} id 
     */
    async destroy(id) {
        const { ctx, service } = this;
        const user = await ctx.service.user.find(id);
        if (!user) {
            ctx.throw(404, 'user not found');
        }
        return ctx.model.User.findByIdAndRemove(id);
    }

    /**
     * 修改用户
     * @param {*} id 
     * @param {*} payload 
     */
    async update(id, payload) {
        const { ctx, service } = this;
        const user = await ctx.service.user.find(id);
        if (!user) {
            ctx.throw(404, 'user not found');
        }
        return ctx.model.User.findByIdAndUpadte(id, payload);
    }

    /**
     * 查询积分
     * @param {*} payload 
     */
    async query(mobile) {
        const { ctx } = this;
        let query = ctx.model.User.findOne(mobile);
        return query.exec().then( (user) => {
            console.log('user: ', user);

            return user;

        }).catch( (err) => {
            
            // retrun {
            //     status: '500',
            //     data: err
            // };
        })
    }

    async data() {
        const { ctx } = this;
        let query = ctx.model.User.find();
        return query.exec().then( (user) => {
            return user;
        });
    }

    async findUser(condition) {
        const { ctx } = this;
        console.log('user condition: ', condition);
        let query = ctx.model.User.find(condition);
        return query.exec().then( (user) => {
            return user;
        })
    }

    async updateUser(payload) {
        const { ctx } = this;
        return await ctx.model.User.findOneAndUpdate(
            {mobile: payload.mobile},
            {$set: payload},
            {new: true},
            function(err, data) {
                if (err) {
                    console.log('delete failed: ', err);
                } else {
                    console.log('delete success', data);
                    return data;
                }
            }
        );
    }

    async deleteUser(payload) {
        const { ctx } = this;
        return await ctx.model.User.findOneAndRemove(
            {mobile: payload.mobile},
            function(err, data) {
                if (err) {
                    console.log('delete failed: ', err);
                } else {
                    console.log('delete success', data);
                    return data;
                }
            }
        );
    }
}

module.exports = UserService;