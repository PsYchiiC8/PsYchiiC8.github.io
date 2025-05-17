import './App.css';

function About() {
  return (
    <div>
        <div className="App">
            <h1>About Me</h1>
        </div>

        <div>
            <table style={{ width: '100%', paddingTop: '10px' }}>
                <tbody>
                    <tr>
                        <td style={{ width: '40%', paddingLeft: '300px', paddingRight: '40px' }}>
                            <img className="profile" src="/Me.jpeg" height="42px" alt="LinkedIn" />
                        </td>

                        <td style={{ width: '100%', paddingRight: '300px', lineHeight: '30px' }}>
                            <p textAlign="left">
                                My name is Kevin Huang and I am a recent graduate from the University of Connecticut with a
                                Bachelor of Science in Computer Science. I am looking for full-time opportunities in 
                                Software Development and Engineering, Data Science/Analysis, or AI/ML. I also have experience or 
                                coursework in Cloud Computing (AWS), Big Data Analytics, and more.
                                <br /><br />
                                At this time, I have enrolled in the Master of Science in Computer Science program at the 
                                University of Connecticut and I look further my understanding of Artificial Intelligence and Machine Learning.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="indented">
            <h2>Skills</h2>

            <table style={{ width: '100%', paddingTop: '10px' }}>
                <tbody>
                    <tr>
                        <td style={{ width: '50%', paddingLeft: '200px' }}>

                            <ul className="indented">
                                <li className="p">
                                    Programming:
                                    <ul>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>C/C++</li>
                                    <li>Cloud Computing (AWS)</li>
                                    </ul>
                                </li>
                                <li>
                                    Front End:
                                    <ul>
                                    <li>HTML/CSS</li>
                                    <li>ReactJS</li>
                                    <li>UI/UX</li>
                                    </ul>
                                </li>
                                <li>
                                    Other:
                                    <ul>
                                    <li>GitHub</li>
                                    <li>Linux/Windows</li>
                                    <li>AI/ML</li>
                                    </ul>
                                </li>
                            </ul>
                        </td>

                        <td style={{ width: '50%', paddingRight: '200px', lineHeight: '30px' }}>

                            <ul className='indented'>
                                <li>
                                    Microsoft Suite and similar applications:
                                    <ul>
                                    <li>Word</li>
                                    <li>PowerPoint</li>
                                    <li>Excel</li>
                                    </ul>
                                </li>
                                <li>
                                    Other:
                                    <ul>
                                    <li>Communication</li>
                                    <li>Teamwork</li>
                                    <li>Agile</li>
                                    <li>English</li>
                                    <li>Chinese (Mandarin)</li>
                                    </ul>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <h3>Connect With Me!</h3>

            <a href="https://www.linkedin.com/in/kevin-huang-002149231" target="_blank" rel="noopener noreferrer">
                <img className="connect" src="/linkedin.png" height="42px" alt="LinkedIn" />
            </a>

            <a href="mailto:kevin.3.huang@uconn.edu" target="_blank" rel="noopener noreferrer">
                <img className="connect" src="/mail.png" height="42px" alt="LinkedIn" />
            </a>

            <a href="https://github.com/PsYchiiC8" target="_blank" rel="noopener noreferrer">
                <img className="connect" src="/github.png" height="42px" alt="GitHub" />
            </a>
            

            <p>
                Download or View My Resume{' '}
                <a href="/Kevin_Huang_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Here
                </a>
            </p>
        </div>
    </div>
  );
}

export default About;