import {
  createSignal,
  createEffect,
  Component,
  ComponentProps,
} from "solid-js";
import { supabase } from "../supabase/supabaseClient";

interface AccountProps extends ComponentProps<any> {
  key: any;
  session: any;
}

const Account: Component<AccountProps> = (props: AccountProps) => {
  const [loading, setLoading] = createSignal(true);
  const [username, setUsername] = createSignal(null);
  const [password, setPassword] = createSignal(null);

  createEffect(() => {
    props.session;
    getProfile();
  });

  const getProfile = async () => {
    try {
      setLoading(true);
      const user: any = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const user: any = supabase.auth.user();

      const updates = {
        id: user.id,
        username: username(),
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div aria-live="polite">
      {loading() ? (
        "Saving ..."
      ) : (
        <form onSubmit={updateProfile} class="form-widget">
          <div>Email: {props.session.user.email}</div>
          <div>
            <label for="username">Name</label>
            <input
              id="username"
              type="text"
              value={username() || ""}
              onChange={(e: any) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              id="password"
              type="text"
              value={password() || ""}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              class="button block primary"
              disabled={loading()}
            >
              Update profile
            </button>
          </div>
        </form>
      )}
      <button
        type="button"
        class="button block"
        onClick={() => supabase.auth.signOut()}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Account;
