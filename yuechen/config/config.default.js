/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1591016639732_1923';

  // add your middleware config here
  config.middleware = [];

  config.view = {
    mapping: {
      '.nj': 'nunjucks'
    }
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/yuechen',
    options: {
    }
  };
  
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: [
      '*'
    ]
  },

  config.cors = {
    origin: '*',
    allowMethods: 'GET, POST' 
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
