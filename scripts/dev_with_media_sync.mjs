import { spawn } from "node:child_process";

const isWin = process.platform === "win32";
const nextCmd = isWin ? "npx.cmd" : "npx";

const syncProc = spawn(process.execPath, ["scripts/media_crop_sync_server.mjs"], {
  stdio: "inherit",
});

const devProc = spawn(nextCmd, ["next", "dev"], {
  stdio: "inherit",
  shell: isWin,
});

function shutdown(signal = "SIGTERM") {
  for (const child of [syncProc, devProc]) {
    if (!child.killed) {
      try {
        child.kill(signal);
      } catch {}
    }
  }
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

devProc.on("exit", (code) => {
  shutdown();
  process.exit(code ?? 0);
});
