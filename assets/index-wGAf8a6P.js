(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/profile-rcJrihni.png`;document.querySelector(`#app`).innerHTML=`
  <main class="container">
    <section class="hero">
      <img
        class="avatar"
        src=${e}
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
`;