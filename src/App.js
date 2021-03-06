import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import Details from './components/Details/Details';
import MyOrders from './components/MyOrders/MyOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddService from './components/AddService/AddService';
import ManageAllOrder from './components/ManageAllOrders/ManageAllOrder';




function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/banner">
          <Banner></Banner>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/myorders">
          <MyOrders></MyOrders>
          </Route>
          <Route path="/manageOrders">
          <ManageAllOrder></ManageAllOrder>
          </Route>
          <Route path="/newservice">
          <AddService></AddService>
          </Route>
          <PrivateRoute path="/details/:id">
          <Details></Details>
          </PrivateRoute>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
