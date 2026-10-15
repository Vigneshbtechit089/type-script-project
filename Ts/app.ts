import fs from "node:fs";

const userName: string = "Vignesh";

fs.writeFileSync("username.txt", userName);

console.log("Username saved!");
