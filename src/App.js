import './App.css';

function App() {
  return (
    <div className="body">
      
    
      <table style={{ width: '100%'}}>
        <tbody>
          <tr>
            <td style={{ width: '33%'}}>

              <h1 className="home">Welcome to My Developer Page!</h1>
              
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

            </td>

            <td style={{ width: '66%'}}>
              <img src="/WLot.jpg" width='100%' maxWidth='1000px' alt="W Lot Sunset"/>
            </td>
          </tr>
        </tbody>
      </table>

    </div>

  );
}

export default App;
