import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from 'react-bootstrap';

const Header = () => {
  return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Practice-React</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  ); 
}

const Layout = ({children}) => {
  return(
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
