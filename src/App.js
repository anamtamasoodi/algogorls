import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import HomePage from "./pages/HomePage";

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">HomePage</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< HomePage />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;