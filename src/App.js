import React from 'react';
import HomePage from  './Components/Home/HomePage';
import { BrowserRouter as Router} from 'react-router-dom';
// import DashboardPage from './Components/DashBoard/DashboardPage';
// import ProductsPage from './Components/Products/ProductsPage';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <div className="App">
        <Router>

      <HomePage />
      {/* <DashboardPage />
      <ProductsPage /> */}
      </Router>
    </div>
  );
}

export default App;
