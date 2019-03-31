import fs from "fs";
import { ProcessHelper as ph, scri } from "scriptastic";

scri.task("build:html")
    .does(() => {
        let html = fs.readFileSync("src/cheater.html", "utf-8");
        html = html.replace(/\"/g, "\\\"")
            .replace(/[\r\n]|  /g, "");
        fs.writeFileSync("src/cheater-html.ts", `const cheaterHtml = "${html}";\n`);
    });

scri.task("build:cleanup")
    .does(() => {
        fs.writeFileSync("src/cheater-html.ts", `const cheaterHtml = "";\n`);
    });

scri.task("build:ts")
    .does(() => {
        ph.executeSync("tsc -p .");
    });

scri.task("build")
    .runs("build:html")
    .runs("build:ts")
    .runs("build:cleanup");
