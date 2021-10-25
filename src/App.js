import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FormDeveloper from './Pages/FormDeveloper';
import Developers from './Pages/Developers';
import Home from './Pages/Home';
import Teams from './Pages/Teams';
import "@pathofdev/react-tag-input/build/index.css";
import 'react-toastify/dist/ReactToastify.css';
import FormEditDeveloper from './Pages/FormEditDeveloper';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/teams" exact component={Teams}/>
        <Route path="/developers" exact component={Developers}/>
        <Route path="/developers/:id" exact component={FormEditDeveloper}/>
        <Route path="/add/developers" exact component={FormDeveloper}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
