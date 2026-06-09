const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");
const out = fs.openSync(path.join(projectRoot, "next-dev.out.log"), "a");
const err = fs.openSync(path.join(projectRoot, "next-dev.err.log"), "a");
const env = { ...process.env };

if (env.Path && env.PATH) {
  env.Path = env.Path || env.PATH;
  delete env.PATH;
}

const child = spawn(
  process.execPath,
  [nextBin, "dev", "--hostname", "127.0.0.1", "--port", "3000"],
  {
    cwd: projectRoot,
    detached: true,
    env,
    stdio: ["ignore", out, err],
    windowsHide: true,
  },
);

child.unref();
console.log(`Started Rave.tech Next dev server with PID ${child.pid}`);
