import React from "react";
import aprenderImg from "../../assets/aprender.png";
import notesImg from "../../assets/notes.png";
import quotesImg from "../../assets/quotes.png";

const Projects = () => {
  return (
    <section>
      <header>
        <h1>Some things I've built</h1>
      </header>
      <div>
        <aside>
          <img src={aprenderImg} alt="Aprender Main Page" height="300px" />
        </aside>
        <section>
          <h2>Aprender</h2>
          <p>Copy of quizlet</p>
          <a href="https://github.com/medreres/aprender" target="_blank">
            Git Link
          </a>
        </section>
      </div>
      <div>
        <aside>
          <img src={notesImg} alt=""  height="300px" />
        </aside>
        <section>
          <h2>Notes App</h2>
          <p>Copy of quizlet</p>
          <a href="https://notes-react-tsx.web.app/" target="_blank">
            Deplomeny
          </a>
        </section>
      </div>
      <div>
        <aside>
          <img src={quotesImg} alt=""  height="300px" />
        </aside>
        <section>
          <h2>Meetup</h2>
          <p>List of meetups</p>
        </section>
      </div>
    </section>
  );
};

export default Projects;
