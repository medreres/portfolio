import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <article className={styles.article}>
        <section>
          <p>
            During my education I have been able to master technologies listed
            below
          </p>
        </section>
      </article>
      <table className={styles.table}>
        <thead>
          <tr>
            <td colSpan={2}>Hard Skills</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Technology</th>
            <th>Level of Knowledge</th>
          </tr>
          <tr>
            <th>HTML</th>
            <td>Knowledge of basic tags, semantic, accesibility</td>
          </tr>
          <tr>
            <th>CSS</th>
            <td>
              Variables, flexbox, familiarity with grid, animations,
              transitions, mobile-responsive, familiarity with preprocessors and
              their purposes, Bootstrap
            </td>
          </tr>
          <tr>
            <th>JavaScript</th>
            <td>
              Classes, objects, Typescript, ES6, data structures, algorithms
            </td>
          </tr>
          <tr>
            <th>React</th>
            <td>
              Hooks, Routing, *.module.css, Functional Components, Class Based
              Components, Redux Toolkit
            </td>
          </tr>
          <tr>
            <th>Next.js</th>
            <td>Experience with metaframework, server side props, routing,</td>
          </tr>
          <tr>
            <th>Python</th>
            <td>Solid understanding, OOP, I/O processing</td>
          </tr>
          <tr>
            <th>Django</th>
            <td>Authentication, ORM, routing, error handling</td>
          </tr>
          <tr>
            <th>C++</th>
            <td>Basic knowledge, OOP, data structures, I/O processing</td>
          </tr>
          <tr>
            <th>SQL, MongoDB</th>
            <td>Experience working from courses</td>
          </tr>
          <tr>
            <th>Git</th>
            <td>Knowledge of basic commands</td>
          </tr>
          <tr>
            <th>REST API</th>
            <td>Basic knowledge</td>
          </tr>
        </tbody>
      </table>

      <table className={styles.table}>
        <thead>
          <tr>
            <td colSpan={1}>Soft Skills</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Communicative</th>
            <td>Able to find a common language</td>
          </tr>
          <tr>
            <th>Organization</th>
            <td>
              Tend to sort everything out rather than working spontaneously
            </td>
          </tr>
          <tr>
            <th>Problem Solving</th>
            <td>
              Not afraig of facing difficult problems, able to find the solution
            </td>
          </tr>
          <tr>
            <th>Fast Learner</th>
            <td>Able to fast learn new technologies</td>
          </tr>
          <tr>
            <th>Diligent</th>
            <td>Will be working up until everything works right</td>
          </tr>
          <tr>
            <th>Inquiring</th>
            <td>Innate inclination learning anything new</td>
          </tr>
          <tr>
            <th>Stress-resistent</th>
            <td>Able to work under stress</td>
          </tr>
          <tr>
            <th>Stress-resistent</th>
            <td>Able to work under stress</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Skills;
