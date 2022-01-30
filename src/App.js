import logo from './logo.svg';
import './App.css';
import CountdownTimer from './components/Countdowntimer';
import GetRequest from './services/get.service';

function App() {
  const DayshoursMinSecs = {days :0,hours:0, minutes: 0, seconds: 10}

  const onButtonClickGet = ()=>{
    GetRequest()
    .then(response=>{
      console.log(response.data);
    })
    .catch(err=>{
      console.log(err);
    })
}
  return (
    <div className="App">
      <CountdownTimer DayshoursMinSecs={DayshoursMinSecs}/>
      <button onClick={onButtonClickGet}>CLICK ON ME</button>
    </div>
  );
}

export default App;
