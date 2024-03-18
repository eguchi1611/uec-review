"use client";

import { supabase } from "@/supabase/client";
import { FormEvent } from "react";

export function DebugSignInForm() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await supabase.auth.signInWithPassword({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" id="input-email" placeholder="Email" />
      <input
        type="password"
        name="password"
        id="input-password"
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
