import { supabase } from "./supabase"

export async function signIn(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw error
}

export async function signUp(email: string, password: string) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) throw error
}

export async function signOut() {
  await supabase.auth.signOut()
}
import { supabase } from "./supabase";

export async function signUp(
  email: string,
  password: string,
  fullName: string
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) throw error;

  if (data.user) {
    await supabase.from("users").insert({
      auth_id: data.user.id,
      full_name: fullName,
      role: "venue_owner"
    });
  }

  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password
    });

  if (error) throw error;
  return data;
}
