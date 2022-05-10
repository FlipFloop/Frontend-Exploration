import { Logo } from './logo'

import {useState} from 'preact/hooks'

export const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  )
}
