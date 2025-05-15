import './App.css';

function About() {
  return (
    <div className="App">
      <h1>About Me</h1>

      <table style={{ width: '100%', paddingTop: '10px' }}>
        <tbody>
          <tr>
            <td style={{ width: '40%', paddingLeft: '330px' }}>
              <img src="/favicon.ico" className="profile" alt="Picture of me" />
            </td>
            <td style={{ width: '100%', paddingRight: '330px', lineHeight: '30px' }}>
              <p>
                My name is Kevin Huang and I am a senior attending the University of Connecticut with an expected
                graduation date in May 2025. I am a first-gen student majoring in Computer Science looking to
                potentially have a concentration in Software Design and Development with a minor in Mathematics. I
                have many interests including—but not limited to—Artificial Intelligence and Robotics.
                <br />
                I am considering completing a Masters degree in Computer Science and potentially looking to do
                research.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Skills</h2>
        <ul className="indented">
            <li className="p">Programming: Python, Java, C/C++</li>
            <li>Front End: HTML/CSS, ReactJS, UI/UX</li>
            <li>Other: Github, Linux/Windows, AI/ML, Time Management</li>
            <li>English</li>
            <li>Chinese (Mandarin)</li>
            <li>Microsoft Suite and similar applications: Word, PowerPoint, and Excel</li>
            <li>Other: Communication, Teamwork, Agile</li>
        </ul>


      <h3>Connect With Me!</h3>
      <table style={{ width: '100%', paddingTop: '10px' }}>
        <tbody>
          <tr>
            <td style={{ width: '50%', paddingLeft: '360px' }}>
              <a className="left" href="https://www.linkedin.com/in/kevin-huang-002149231" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.png" height="42px" alt="LinkedIn" />
              </a>
            </td>
            <td style={{ width: '100%', paddingRight: '360px' }}>
              <a className="left" href="mailto:kevin.3.huang@uconn.edu" target="_blank" rel="noopener noreferrer">
                <img src="/mail.png" height="42px" alt="Email" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <p className=" ">
        Download or View My Resume{' '}
        <a href="/Kevin_Huang_Resume.pdf" target="_blank" rel="noopener noreferrer">
          Here
        </a>
      </p>
    </div>
  );
}

export default About;