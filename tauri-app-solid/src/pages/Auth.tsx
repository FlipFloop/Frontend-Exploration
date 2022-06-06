import { createSignal, Component, ComponentProps } from "solid-js";
import { supabase } from "../supabase/supabaseClient";

interface AuthProps extends ComponentProps<any> {
  // add props here
}

const Auth: Component<AuthProps> = (props: AuthProps) => {
  const [loading, setLoading] = createSignal(false);
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await signInWithEmail(email, password);
      // const { error } = await supabase.auth.signIn({ email: email() });
      if (error) throw error;
      alert("Signing in!");
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const signInWithEmail = async (email: any, password: any) => {
    const { user, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });

    return { user, error };
  };

  const resetPass = async (email: any) => {
    const { error, data } = await supabase.auth.api.updateUser(access_token, {
      password: new_password,
    });
    // const { data, error } = await supabase.auth.api.resetPasswordForEmail(
    //   email
    // );

    // return { data, error };
  };

  return (
    <div class="row flex flex-center">
      <div class="col-6 form-widget" aria-live="polite">
        <h1 class="header">Supabase + SolidJS</h1>
        <p class="description">Sign in via magic link with your email below</p>
        {loading() ? (
          "Sending magic link..."
        ) : (
          <>
            <form onSubmit={() => resetPass(email)}>
              <input
                id="password"
                class="inputField"
                type="txt"
                placeholder="Your password"
                value={password()}
                onChange={(e: any) => setPassword(e.target.value)}
              />
              <button type="submit" class="button block" aria-live="polite">
                Reset
              </button>
            </form>
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
              <button type="submit" class="button block" aria-live="polite">
                Sign In
              </button>
              {/* <label for="email">Email</label>
            <input
              id="email"
              class="inputField"
              type="email"
              placeholder="Your email"
              value={email()}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <button type="submit" class="button block" aria-live="polite">
              Send magic link
            </button> */}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
