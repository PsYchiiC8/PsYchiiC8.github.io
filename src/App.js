import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <a class="right" href="/about">About</a>
        <a class="right" href="/projects">Projects</a>
        <a class="right" href="/">Home</a>
        
        <a class="left" href="https://www.linkedin.com/in/kevin-huang-002149231" target="_blank">
        <img src="/linkedin.png" height="42px" alt="LinkedIn"></img></a>
        
        <a class="left" href="mailto:kevin.3.huang@uconn.edu" target="_blank">
        <img src="/mail.png" height="42px" alt="Email"></img></a>
      </nav>
      
      <div className="body">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <h1 class="home">Welcome to My Developer Page</h1>
        
        <br/>
        
        <p className="home">"Learn as if you will live forever,
          <br/>
          live like you will die tomorrow"
          <br/>
          -Mahatma Gandhi
        </p>

        <br/>
        <p className="home">Hello there!
          <br/>
          Thank you for visiting my website.
          <br/>
          Please feel free to go through
          <br/>
          my pages and learn about me!
        </p>

      </div>
    
    </div>
  );
}

export default App;
