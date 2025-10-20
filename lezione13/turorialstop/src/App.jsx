/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */


const tutorials = [
  {
    topic: "React",
    language: "JS/TypeScript",
    title: "First app in React",
    excerpt: "React.js Lorem Ipsum è un testo segnaposto.",
    allText: "React.js Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.",
    readingTime: 15,
    pic: reactImg,
    isDifficult: false,
    website: {
      title: "React site",
      link: "https://react.dev/",
    }
  },
  {
    topic: "Next.js",
    language: "TypeScript",
    title: "A React-based framework!",
    excerpt: "Next.js Lorem Ipsum è un testo segnaposto.",
    allText: "Next.js Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.",
    readingTime: 12,
    pic: nextjsImg,
    isDifficult: true,
    website: {
      title: "Next.js site",
      link: "https://nextjs.org/",
    }
  },
  {
    topic: "Angular",
    language: "TypeScript",
    title: "Angular 18 is out!",
    excerpt: "Angular Lorem Ipsum è un testo segnaposto.",
    allText: "Angular Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.",
    readingTime: 10,
    pic: angularImg,
    isDifficult: false,
    website: {
      title: "Angular site",
      link: "https://angular.dev/",
    }
  },
  {
    topic: "Svelte",
    language: "JS/TypeScript",
    title: "Cybernetically enhanced web apps",
    excerpt: "Svelte Lorem Ipsum è un testo segnaposto.",
    allText: "Svelte Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.",
    readingTime: 14,
    pic: svelteImg,
    isDifficult: false,
    website: {
      title: "Svelte site",
      link: "https://svelte.dev/",
    }
  },
  {
    topic: "React",
    language: "JS/TypeScript",
    title: "First app in React",
    excerpt: "React.js Lorem Ipsum è un testo segnaposto.",
    allText: "React.js Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.",
    readingTime: 15,
    pic: reactImg,
    isDifficult: false,
    website: {
      title: "React site",
      link: "https://react.dev/",
    }
  },
  {
    topic: "Angular",
    language: "TypeScript",
    title: "Angular 18 is out!",
    excerpt: "Angular Lorem Ipsum è un testo segnaposto.",
    allText: "Angular Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.",
    readingTime: 10,
    pic: angularImg,
    isDifficult: false,
    website: {
      title: "Angular site",
      link: "https://angular.dev/",
    }
  }
];

const comments = [

];

function App() {
  return (
    <h1>Turoials Top</h1>
  )
}

export default App();
