import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {Button, Dropdown, Form, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartSidebar from "./CartSidebar";

import Logo from '../../style/images/logo.svg';

import { logout } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";

export default function  Header(props) {

  const dispatch = useDispatch();

  const auth = localStorage.getItem('user-info');
  const navigate = useNavigate();

  const [miniCart, setMiniCart] = useState(false);

  const logout =()=> {
    localStorage.clear();
    navigate('/login');
    console.log("Logout successfuly");
  }

  // const handleSidebarCart = () => {
  //   console.log("click");
  //   //setMiniCart(true);
  //   setMiniCart(prevCheck => !prevCheck);
  // }

  const closeCartSidebar = () => {
    setMiniCart(prevCheck => !prevCheck);
  }

  const toggleSidebar = () => {
    return miniCart;
  }



  return (
    <>
      <CartSidebar CartSidebarToggle={toggleSidebar} CloseCartSidebar={closeCartSidebar} />
      
      <Navbar bg="" variant="light" expand="lg" className="mainMenu">
      <Container>
        <Navbar.Brand href="#">
          <img className="Logo img-fluid" src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-uppercase"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link active" to="/men">Men</Link>
            <Link className="nav-link active" to="/">Women</Link>
            <Link className="nav-link active" to="/">Accessories</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
          </Form>
          <ul className="navbar-nav top_menu_right">
            <li className="nav-item">
                <Link className="nav-link text-clr" to="/wishlist">
                  <i className="fa-regular fa-heart"></i>
                </Link>
            </li>
            <li className="nav-item dropdown">
              <p className="nav-link miniCartBtn mb-0 text-clr" onClick={closeCartSidebar}>
                <i className="fa-solid fa-bag-shopping"></i>
                {/* <span className="cartCount">1</span> */}
              </p>
            </li>
            <li className="nav-item">
            <Dropdown>
              <Dropdown.Toggle className="bg-t border-0 text-clr" id="dropdown-basic">
                <i className="fa-solid fa-user"></i>
              </Dropdown.Toggle>
              {
                auth ? <Dropdown.Menu>
                        <Dropdown.Item onClick={()=> dispatch(logout)}>Logout</Dropdown.Item>
                      </Dropdown.Menu>
              :
              <Dropdown.Menu>
                <Link to="/login" className="dropdown-item">Login</Link>
                <Link to="/register" className="dropdown-item">Register</Link>
              </Dropdown.Menu>

              }
              
            </Dropdown>
            </li>
            <li className="nav-item d-block d-sm-none">
              <button className="navbar-toggler" type="button">
                <i className="mobile-menu-icons fa-regular fa-bars"></i>
              </button>
            </li>
          </ul>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
