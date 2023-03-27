import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from '../components/SideBar/SideBar';
import BrandBar from '../components/BrandBar/BrandBar';
const Shop = () => {
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <SideBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;