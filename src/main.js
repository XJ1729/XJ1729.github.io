import './style.css'
import profilepic from './assets/profile.png'

document.querySelector('#app').innerHTML = `
  <main class="container">
    <section class="hero">
      <img
        class="avatar"
        src=${profilepic}
        alt="Profile picture"
      />

      <h1>Kathleen Chen</h1>

      <p class="subtitle">
        Computer Science and Physics @ University of California, Santa Barbara
      </p>

      <div class="buttons">
        <a href="https://github.com/XJ1729" target="_blank">
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/chenk1729/" target="_blank">
          LinkedIn
        </a>
      </div>
    </section>

    <section class="about">
      <h2>About Me</h2>

      <p>
        Currently working on parser verification in Lean and building a personal website. <br>
        Experienced in Python, Java, C++, JS, and functional programming. 
      </p>
    </section>

    <section class="projects">
      <h2>Projects</h2>

      <div class="project-grid">
        <article class="card">
          <h3>Project One</h3>
          <p>Short description of your project.</p>
        </article>

        <article class="card">
          <h3>Project Two</h3>
          <p>Another project description.</p>
        </article>

        <article class="card">
          <h3>Project Three</h3>
          <p>Something cool you built.</p>
        </article>
      </div>
    </section>
  </main>
`
