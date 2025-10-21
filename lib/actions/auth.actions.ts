// lib/actions/auth.actions.ts
"use server";

interface AuthData {
  email: string;
  password: string;
}

export async function signInWithEmail(data: AuthData) {
  console.log("🟢 signInWithEmail called:", data);
  // Simulate API call
  await new Promise((r) => setTimeout(r, 1000));

  // Example mock success
  return { success: true };
}

export async function signUpWithEmail(data: AuthData) {
  console.log("🟢 signUpWithEmail called:", data);
  // Simulate API call
  await new Promise((r) => setTimeout(r, 1000));

  // Example mock success
  return { success: true };
}
