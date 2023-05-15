import logo from './logo.svg';
import './App.css';

function App() {
  let question = "How was the session?"
  let question1 = "Knowledge of Staff?"
  return (
    <div style={{
      border:"solid",
      width:"400px",
      height:"400px",
      paddingLeft:"30px",
      backgroundColor:"#F9FBE7",
      borderRadius:"40px",
      marginLeft:"50px"
    }}>
        <form className="row g-4" method='get'>
        <h1>{question}</h1>
        <div className="col-sm-10">
          <div className="form-check">
            <input className="form-check-input" type="radio" name={question} id="gridRadios1" value="Good"></input>
            <label className="form-check-label" for="gridRadios1">
              Good
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={question} id="gridRadios1" value="Better"></input>
            <label className="form-check-label" for="gridRadios1">
              Better
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={question} id="gridRadios1" value="Best"></input>
            <label className="form-check-label" for="gridRadios1">
              Best
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={question} id="gridRadios1" value="Excellent"></input>
            <label className="form-check-label" for="gridRadios1">
              Excellent
            </label>
          </div>
        </div>
        <h1>{question1}</h1>
        <div className="col-sm-10">
          <div className="form-check">
            <input className="form-check-input" type="radio" name={question1} id="gridRadios1" value="Good"></input>
            <label className="form-check-label" for="gridRadios1">
              Good
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={question1} id="gridRadios1" value="Better"></input>
            <label className="form-check-label" for="gridRadios1">
              Better
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={question1} id="gridRadios1" value="Best"></input>
            <label className="form-check-label" for="gridRadios1">
              Best
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={question1} id="gridRadios1" value="Excellent"></input>
            <label className="form-check-label" for="gridRadios1">
              Excellent
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
      
  );
}

export default App;
