import { createSignal, Component, ComponentProps } from "solid-js";
import { supabase } from "../supabase/supabaseClient";
import { invoke } from "@tauri-apps/api/tauri";

interface AuthProps extends ComponentProps<any> {
  // add props here
}

const Auth: Component<AuthProps> = (props: AuthProps) => {
  const [loading, setLoading] = createSignal(false);
  const [email, setEmail] = createSignal<string>("victor.guyard@icloud.com");
  const [password, setPassword] = createSignal<string>("YodaTest12@");
  const [name, setName] = createSignal<string>("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user, session, error } = await supabase.auth.signIn({
        email: email(),
        password: password(),
      });
      alert(email() + " " + password());
      if (error) throw error;
      alert("Signing in!");
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const createAccount = async (e: any) => {
    e.preventDefault();
    try {
      const { user, session, error } = await supabase.auth.signUp({
        email: email(),
        password: password(),
      });
      return { user, session, error };
    } catch (error: any) {
      alert(error);
    }
  };

  return (
    <div class="row flex flex-center">
      <div class="col-6 form-widget" aria-live="polite">
        <h1 class="header">Supabase + SolidJS</h1>
        <p class="description">Sign in via email</p>
        {loading() ? (
          "Sending magic link..."
        ) : (
          <>
            <form onSubmit={handleLogin}>
              <label for="email">Email</label>
              <input
                id="email"
                class="inputField"
                type="email"
                placeholder="Your email"
                value={email()}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <input
                id="password"
                class="inputField"
                type="txt"
                placeholder="Your password"
                value={password()}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <input
                id="name"
                class="inputField"
                type="txt"
                placeholder="Your name"
                value={name()}
                onChange={(e: any) => setName(e.target.value)}
              />
              <button type="submit" class="button block" aria-live="polite">
                Sign In or Create Account
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
