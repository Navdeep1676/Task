import "./App.css";

import Register from "./Register";
import Login from "./Login";
import {Switch,Route} from 'react-router-dom'

function App() {
  return(
    <div className='container'>
      <div className="row">
        <div className="col-12">
     <Login/>
     <Register/>
        </div>
      </div>
     
    </div>
  )
  
}

export default App;
