import logo from './logo.svg';
import './App.css';
import Main from './Components/main';
import Navbar from './Components/navbar';
import {Switch, Route} from 'react-router-dom';
import Water from './Components/countWater';
function App() {
  return (
    <div>
       <Navbar />
       <Switch>
         <Route exact path="/" component={Main}/>
         <Route exact path="/water" component={Water}/>
       </Switch>
      
    </div>
  );
}

export default App;
