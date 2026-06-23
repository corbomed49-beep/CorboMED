import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "corbomed_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 8; // 8 horas

function getAuthSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("AUTH_SECRET deve ter pelo menos 32 caracteres");
  }
  return new TextEncoder().encode(secret);
}

export async function verifyAdminCredentials(email: string, password: string) {
  const adminEmail = process.env.ADMIN_EMAIL;
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !passwordHash) {
    throw new Error("ADMIN_EMAIL e ADMIN_PASSWORD_HASH devem estar configurados");
  }

  if (email.trim().toLowerCase() !== adminEmail.trim().toLowerCase()) {
    return false;
  }

  return bcrypt.compare(password, passwordHash);
}

export async function createSessionToken() {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(getAuthSecret());
}

export async function verifySessionToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getAuthSecret());
    return payload.role === "admin";
  } catch {
    return false;
  }
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return false;
  return verifySessionToken(token);
}

export async function setSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export { SESSION_MAX_AGE };
