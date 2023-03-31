import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import star_card from '../assets/star_card.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceApi';

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    return (
        <Container className='mt-4'>
            <Row>
                <Col md={4}>
                    <Image style={{backgroundSize: 'cover'}} width={400} height={430} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={6}>
                    <div className='d-flex align-items-center'>
                        <h1 style={{fontSize: 26}}>{device.name}</h1>
                        <div className='d-flex align-items-center justify-content-center'
                        style={{background: `url(${star_card}) no-repeat center center`, 
                        width: 24, height: 23, 
                        backgroundSize: 'cover', 
                        fontSize: 14}}>
                            {device.rating}
                        </div>
                    </div>
                    <Row className='d-flex flex-column mt-3'>
                    <h2 style={{fontSize: 20}}>Характеристики</h2>
                        <ul style={{width: 630}}>
                            {device.info.map(info => 
                                <li key={info.id} 
                                className='d-flex justify-content-between pb-1 mb-2 ms-1' 
                                style={{borderBottom: '1px dashed #bfbdb2'}}>
                                    <span>{info.title}</span>
                                    <span>{info.description}</span>
                                </li>
                            )}
                        </ul>
                    </Row>
                </Col>
                <Col md={2}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                    style={{width: 300, height: 200, fontSize: 32,  backgroundColor: '#f5f5f6'}}>
                        <span>{device.price} ₽</span>
                        <Button variant='danger'>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;