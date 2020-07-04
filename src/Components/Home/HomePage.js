import React from 'react';
// import NavBar from './NavBar';
// import DashboardTab from './DashboardTab';
// import ProductTab from './ProductTab';
import { Cart4, Cart } from 'react-bootstrap-icons';
import DashboardPage from '../DashBoard/DashboardPage';
import ProductsPage from '../Products/ProductsPage';
import CartPage from '../Cart/CartPage';
import {Route, Link, Switch } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';


function HomePage() {
  return (
    <>
    <Navbar bg="primary" variant="dark">
        <Cart4 className="mr-2" bg="dark"/>
    <Navbar.Brand href="/">
      Shopping Cart
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/Components/DashBoard/DashboardPage">Admin dashboard</Nav.Link>
      <Nav.Link as={Link} to="/Components/Products/ProductsPage">Products</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} className="mr-sm-2" to="/Components/Cart/CartPage"><Cart className="mr-2" bg="dark"/>Cart</Nav.Link>
    </Nav>

  </Navbar>
      <Switch>
        <Route exact path="/" />
        <Route path="/Components/DashBoard/DashboardPage" component={DashboardPage} />
        <Route path="/Components/Products/ProductsPage" component={ProductsPage} />
        <Route path="/Components/Cart/CartPage" component={CartPage} />
      </Switch>
      {/* <Router>
      <Link to="/Components/DashBoard/DashboardPage">
        <DashboardTab />
      </Link>
      <Link to="/Components/Products/ProductsPage">
        <ProductTab />
        </Link>
        
        <Switch>
        <Route exact path="/Components/DashBoard/DashboardPage" component={DashboardPage} />
        <Route exact path="/Components/Products/ProductsPage" component={ProductsPage} />
      </Switch>
      </Router> */}
    </>
  )
}

export default HomePage
