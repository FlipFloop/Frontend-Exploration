import { createSignal } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

const App = () => {
  const [data, setData] = createSignal("");

  const getData = async () => {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setData(await invoke("get_courses"));
  };

  return (
    <div class="container">
      <h1>Welcome to Tauri!</h1>

      <div class="row">
        <div>
          {/* <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          /> */}
          <button
            type="button"
            onClick={() => {
              setData("Loading")
              getData();
            }}
          >
            Get Course Data
          </button>
        </div>
      </div>

      <h2>{data()}</h2>
    </div>
  );
};

export default App;
