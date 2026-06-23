import bcrypt from "bcryptjs";

const password = process.argv[2];

if (!password) {
  console.error("Uso: node scripts/hash-password.mjs \"SuaSenhaAqui\"");
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 12);
console.log("\nCole em ADMIN_PASSWORD_HASH no .env.local:\n");
console.log(hash);
console.log("");
