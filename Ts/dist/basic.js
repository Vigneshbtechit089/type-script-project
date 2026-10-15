console.log("Hello Typescript!!");
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Guest"] = 1] = "Guest";
})(Role || (Role = {}));
let userRoles = Role.Admin;
console.log(userRoles);
export {};
//# sourceMappingURL=basic.js.map