"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello Typescript!!");
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Guest"] = 1] = "Guest";
})(Role || (Role = {}));
var userRoles = Role.Admin;
