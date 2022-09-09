import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Wishlist from './components/Whishlist';
// import AnimesList from './components/AnimesList';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
<Router>
     <Navbar/>

     <Switch>
     <Route exact path="/">
     <Home/>
     </Route>

<Route path="/wishlist">
  <Wishlist/>
</Route>
</Switch>
     </Router>
    </div>
  );
}

export default App;
