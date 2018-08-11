import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Nav,
    Navbar,
    NavItem,
    Button,
    Modal
} from 'react-bootstrap';
import logo from '../../Assets/images/logo.svg';

export const Warpper = props => <div className="App">{props.children}</div>
export const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">ระบบสั่งอาหารออนไลน์</h1>
        </header>
    );
};
export const NavBar = props => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/home">One Day Cat</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <LinkContainer to="/home">
                    <NavItem eventKey={1} >หน้าแรก</NavItem>
                </LinkContainer>
                <LinkContainer to="/cart">
                    <NavItem eventKey={2} >ตระกร้าสินค้า</NavItem>
                </LinkContainer>
                <LinkContainer to="/history">
                    <NavItem eventKey={3} >ประวัติการสั่งซื้อ</NavItem>
                </LinkContainer>
                <LinkContainer to="/config">
                    <NavItem eventKey={4} >ตั้งค่าระบบ</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
};
export const ModalBS = props => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.children}</Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};