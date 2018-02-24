import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar , Col} from 'react-bootstrap';

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
      <div className="container-fluid">
        <Col xsOffset={1} xs={10} xsOffset={1}>
	    <h1 className="page-header">Sample React Program</h1>
	    {children}
        </Col>
      </div>
    </div>
  );
}

export default Layout;
