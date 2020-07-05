import React, {useReducer, createContext} from 'react';
import HomePage from  './Components/Home/HomePage';
import { BrowserRouter as Router} from 'react-router-dom';
// import DashboardPage from './Components/DashBoard/DashboardPage';
// import ProductsPage from './Components/Products/ProductsPage';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import './App.css';
import Reducer from './ReducerProduct//Reducer';


export const productContext = createContext();


function App() {

  const initialState = [];
  const [productAdded, dispatch] = useReducer(Reducer, initialState);


  return (
    <div className="App">
        <Router>
    <productContext.Provider value = {{productAdded: productAdded, dispatch: dispatch}}>
      <HomePage />
    </productContext.Provider>
      {/* <DashboardPage />
      <ProductsPage /> */}
      </Router>
    </div>
  );
}

export default App;
