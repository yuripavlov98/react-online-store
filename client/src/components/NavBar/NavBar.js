import React, { useContext } from 'react';
import { Context } from '../../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts';
import Button from 'react-bootstrap/Button';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>Online shop</NavLink>
          {user.isAuth ?
            <Nav style={{color: 'white'}} className="ml-auto">
              <Button variant="outline-light">Войти</Button>
              <Button style={{marginLeft: 20}} variant="outline-light">Админ панель</Button>
            </Nav>
            :
            <Nav style={{color: 'white'}} className="ml-auto">
              <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
              
            </Nav>
          }
        </Container>
      </Navbar>
    );
});

export default NavBar;