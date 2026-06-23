import { NextResponse } from "next/server";
import {
  createSessionToken,
  setSessionCookie,
  verifyAdminCredentials,
} from "@/lib/auth/session";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "E-mail e senha são obrigatórios" }, { status: 400 });
    }

    const valid = await verifyAdminCredentials(email, password);
    if (!valid) {
      return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
    }

    const token = await createSessionToken();
    await setSessionCookie(token);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Erro de configuração do servidor. Verifique as variáveis de ambiente." },
      { status: 500 }
    );
  }
}
