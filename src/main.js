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
        Computer Science & Physics @ University of California, Santa Barbara
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
        Currently working on parser verification in Lean & building my personal website. <br><br>
        Experienced in Python, Java, C++, JS, and functional programming. 
      </p>
    </section>

    <section class="projects">
      <h2>Projects</h2>

      <div class="project-grid">
        <article class="card">
          <h3>ERSP Hardekopf 2025-26</h3>
          <p>LL1 parser verification in Lean following the 2020 Zippy LL(1) parsing paper.</p>
        </article>

        <article class="card">
          <h3>SB Hacks 2026 - Quakeproof</h3>
          <p>Worked on earthquake API and frontend development.</p>
        </article>

        <article class="card">
          <h3>Ongoing</h3>
          <p>To be announced.</p>
        </article>
      </div>
    </section>

    <section class="contact">
      <h2>Contact Me</h2>

      <p>
        I'm open to internship opportunities and collaborations. Feel free to reach out!
      </p>


      <div class="contact-links">
        <a href="mailto:chenk1729@gmail.com">
          Email
        </a>

        <a href="https://linkedin.com/in/yourprofile" target="_blank">
          LinkedIn
        </a>

        <a href="https://github.com/yourusername" target="_blank">
          GitHub
        </a>
    </div>
  </section>
  </main>
`
