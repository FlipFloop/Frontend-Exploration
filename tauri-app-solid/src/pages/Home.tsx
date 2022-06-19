import { createSignal, onMount, onCleanup } from "solid-js";
import * as bootstrap from "bootstrap";

const Home = () => {
  return (
    <section class="bg-gray-100 text-gray-700 p-8">
      <h1>Hello!</h1>
      <a href="/newCard">Create New entry</a>
    </section>
  );
};

export default Home;
