'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/hello', controller.home.index);
  router.post('/api/register', controller.user.register);
  router.post('/api/score', controller.user.queryScore);
  router.get('/api/user', controller.user.data);   //查询user表所有数据
  router.post('/api/find_user', controller.user.findUser);
  router.post('/api/update_user', controller.user.updateUser);
  router.post('/api/delete_user', controller.user.deleteUser);
  router.post('/api/login', controller.employee.login);
  router.post('/api/register_employee', controller.employee.register);
  router.get('/test_get', controller.employee.test_get);
  router.post('/test_post', controller.employee.test_post);
};
