import type { Component } from 'solid-js';

import styles from './App.module.css';

import CardEntry from './components/CardEntry'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <CardEntry />
      </header>
    </div>
  );
};

export default App;
