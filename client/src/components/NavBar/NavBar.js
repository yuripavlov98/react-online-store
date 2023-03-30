import React, { useContext } from "react";
import { Context } from "../../index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
	const { user } = useContext(Context);
	const navigate = useNavigate();
	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<NavLink
					style={{ color: "white", textDecoration: "none" }}
					to={SHOP_ROUTE}
				>
					Online shop
				</NavLink>
				{user.isAuth ? (
					<Nav style={{ color: "white" }} className='ml-auto'>
						<Button
							variant='outline-light'
							onClick={() => navigate(LOGIN_ROUTE)}
						>
							Выйти
						</Button>
						<Button
							className='ms-2'
							variant='outline-light'
							onClick={() => navigate(ADMIN_ROUTE)}
						>
							Админ панель
						</Button>
					</Nav>
				) : (
					<Nav style={{ color: "white" }} className='ml-auto'>
						<Button
							variant='outline-light'
							onClick={() => user.setIsAuth(true)}
						>
							Авторизация
						</Button>
					</Nav>
				)}
			</Container>
		</Navbar>
	);
});

export default NavBar;
