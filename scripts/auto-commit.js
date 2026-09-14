import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const watchedDirectories = new Set();
const ignoredDirNames = new Set([".git", "node_modules", "dist", "dist-ssr"]);
let debounceTimer = null;

function hasChanges() {
  try {
    const status = execSync("git status --porcelain", {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return status.trim().length > 0;
  } catch {
    return false;
  }
}

function commitChanges() {
  if (!hasChanges()) {
    return;
  }

  try {
    execSync("git add -A", {
      cwd: root,
      stdio: ["ignore", "inherit", "inherit"],
    });

    execSync('git commit -m "Auto-save commit"', {
      cwd: root,
      stdio: ["ignore", "inherit", "inherit"],
    });

    console.log(`[auto-commit] Saved changes committed at ${new Date().toLocaleTimeString()}`);
  } catch (error) {
    console.error("[auto-commit] Commit failed:", error.message);
  }
}

function scheduleCommit() {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  debounceTimer = setTimeout(() => {
    commitChanges();
  }, 1500);
}

function shouldSkipDirectory(name) {
  return ignoredDirNames.has(name) || name.startsWith(".");
}

function watchDirectory(directoryPath) {
  if (watchedDirectories.has(directoryPath)) {
    return;
  }

  watchedDirectories.add(directoryPath);

  try {
    fs.watch(directoryPath, (eventType, filename) => {
      if (!filename || filename.startsWith(".") && filename !== ".gitignore") {
        return;
      }

      scheduleCommit();
    });
  } catch {
    // Ignore watch registration errors for directories that become unavailable.
  }

  try {
    const entries = fs.readdirSync(directoryPath, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) {
        continue;
      }

      if (shouldSkipDirectory(entry.name)) {
        continue;
      }

      watchDirectory(path.join(directoryPath, entry.name));
    }
  } catch {
    // Ignore read errors for directories that may disappear while watching.
  }
}

try {
  const status = execSync("git rev-parse --is-inside-work-tree", {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });

  if (!status.trim().includes("true")) {
    throw new Error("Not a Git repository");
  }
} catch {
  console.error("[auto-commit] This directory is not a Git repository.");
  process.exit(1);
}

watchDirectory(root);
console.log(`[auto-commit] Watching ${root} for file changes. Press Ctrl+C to stop.`);
