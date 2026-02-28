import { createHmac, timingSafeEqual } from "node:crypto";

export const AUTH_COOKIE_NAME = "offhand_session";
export const SESSION_TTL_SECONDS = 60 * 60 * 8;

type SessionPayload = {
  email: string;
  exp: number;
};

function getAuthSecret() {
  return process.env.OFFHAND_AUTH_SECRET || "offhand-dev-secret-change-me";
}

export function getAuthCredentials() {
  return {
    email: process.env.OFFHAND_ADMIN_EMAIL || "admin@offhand.local",
    password: process.env.OFFHAND_ADMIN_PASSWORD || "offhand123",
  };
}

function sign(value: string) {
  return createHmac("sha256", getAuthSecret()).update(value).digest("base64url");
}

export function createSessionToken(email: string) {
  const payload: SessionPayload = {
    email,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };
  const encoded = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
  const signature = sign(encoded);
  return `${encoded}.${signature}`;
}

export function verifySessionToken(token?: string) {
  if (!token) {
    return null;
  }

  const [encoded, providedSignature] = token.split(".");
  if (!encoded || !providedSignature) {
    return null;
  }

  const expectedSignature = sign(encoded);
  const a = Buffer.from(providedSignature);
  const b = Buffer.from(expectedSignature);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return null;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encoded, "base64url").toString("utf8"),
    ) as SessionPayload;

    if (!payload.email || typeof payload.exp !== "number") {
      return null;
    }
    if (payload.exp <= Math.floor(Date.now() / 1000)) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function isValidCredentials(email: string, password: string) {
  const expected = getAuthCredentials();
  return email === expected.email && password === expected.password;
}
