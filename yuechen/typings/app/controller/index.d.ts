// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportEmployee = require('../../../app/controller/employee');
import ExportHome = require('../../../app/controller/home');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    employee: ExportEmployee;
    home: ExportHome;
    user: ExportUser;
  }
}
