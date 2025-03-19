import React from "react";
import Search from "./components/Search";

function App() {

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper" />
        <header>
          <img src="./hero-img.png" alt="Hero Banner" />
          <h1 className="mx-auto max-w-4xl text-center text-5xl font-bold leading-tight tracking-[-1%] text-white sm:text-[64px] sm:leading-[76px]">Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
        </header>

        <Search />
    </main>
  )
}

export default App;