import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { NavLink, useLocation } from 'react-router-dom';


const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    return (
        <Container 
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 450}} className='p-5'>
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите email'
                    />
                    <Form.Control
                        className='mt-2'
                        placeholder='Введите пароль'
                    />
                    <Row className='d-flex mt-3 ps-3 pe-3'>
                        {isLogin ? 
                        <div>
                            Нет учетной записи? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                        </div>
                        }
                        <Button className='mt-2' variant='outline-success'>
                                {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>

                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;