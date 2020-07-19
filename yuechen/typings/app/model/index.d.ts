// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportEmployee = require('../../../app/model/employee');
import ExportRecord = require('../../../app/model/record');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Employee: ReturnType<typeof ExportEmployee>;
    Record: ReturnType<typeof ExportRecord>;
    User: ReturnType<typeof ExportUser>;
  }
}
