#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const DRY_RUN = process.argv.includes("--dry-run");
const rootDir = process.cwd();
const configPath = path.join(rootDir, ".vscode", "ftp.json");
const sourceDir = path.join(rootDir, "out");

function fail(message) {
  console.error(`[deploy-ftp] ${message}`);
  process.exit(1);
}

function readConfig() {
  if (!fs.existsSync(configPath)) {
    fail(`Missing ${configPath}`);
  }

  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(configPath, "utf8"));
  } catch (error) {
    fail(`Cannot parse .vscode/ftp.json: ${error instanceof Error ? error.message : String(error)}`);
  }

  if (!Array.isArray(parsed) || parsed.length !== 1 || typeof parsed[0] !== "object" || parsed[0] === null) {
    fail("Expected .vscode/ftp.json to be an array with one config object.");
  }

  return parsed[0];
}

function normalizeRemotePath(value) {
  const raw = (typeof value === "string" ? value : "").trim();
  if (!raw) return "/";
  const prefixed = raw.startsWith("/") ? raw : `/${raw}`;
  return prefixed.replace(/\/+$/, "") || "/";
}

function encodeRemotePath(value) {
  return value
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function listFiles(dir, acc = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      listFiles(fullPath, acc);
    } else if (entry.isFile()) {
      acc.push(fullPath);
    }
  }
  return acc;
}

const config = readConfig();
const host = typeof config.host === "string" ? config.host.trim() : "";
const username = typeof config.username === "string" ? config.username : "";
const password = typeof config.password === "string" ? config.password : "";
const port = Number.isFinite(Number(config.port)) ? Number(config.port) : 21;
const remoteBasePath = normalizeRemotePath(config.path);

if (!host) fail("Missing `host` in .vscode/ftp.json");
if (!username) fail("Missing `username` in .vscode/ftp.json");
if (!password) fail("`password` is empty in .vscode/ftp.json");
if (!fs.existsSync(sourceDir)) fail("Missing `out/` directory. Run `npm run build` first.");

const files = listFiles(sourceDir);
if (files.length === 0) fail("No files found in `out/`.");

console.log(`[deploy-ftp] Source: ${sourceDir}`);
console.log(`[deploy-ftp] Target: ftp://${host}:${port}${remoteBasePath}`);
console.log(`[deploy-ftp] Files: ${files.length}${DRY_RUN ? " (dry run)" : ""}`);

for (const filePath of files) {
  const relative = path.relative(sourceDir, filePath).split(path.sep).join("/");
  const remotePath = `${remoteBasePath}/${relative}`.replace(/\/{2,}/g, "/");
  const remoteUrl = `ftp://${host}:${port}${encodeRemotePath(remotePath)}`;

  if (DRY_RUN) {
    console.log(`[dry-run] ${relative} -> ${remotePath}`);
    continue;
  }

  const result = spawnSync(
    "curl",
    [
      "--silent",
      "--show-error",
      "--fail",
      "--ftp-create-dirs",
      "--user",
      `${username}:${password}`,
      "--upload-file",
      filePath,
      remoteUrl,
    ],
    { stdio: "pipe", encoding: "utf8" },
  );

  if (result.status !== 0) {
    const stderr = (result.stderr || "").trim();
    fail(`Upload failed for ${relative}${stderr ? `: ${stderr}` : ""}`);
  }

  console.log(`[uploaded] ${relative}`);
}

console.log("[deploy-ftp] Done.");
