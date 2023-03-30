import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import star_card from '../assets/star_card.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DevicePage = () => {
    const device = {id: 1, name: "Cмартфон Apple iPhone 12 pro", price: 49990, rating: 5, img: "9a56ba70-de47-47d9-a545-ba78e1206999.jpg"}
    const description = [
        {id:1, title: 'Гарантия', description: '1 год'},
        {id:4, title: 'Модель', description: 'MGMK3RU/A'},
        {id:6, title: 'Разрешение экрана', description: '2532x1170 Пикс'},
        {id:7, title: 'Экран', description: '6.1"/2532x1170 Пикс'},
        {id:8, title: 'Технология экрана', description: 'OLED'},
        {id:9, title: 'Безрамочный', description: 'Да'},
        {id:10, title: 'Тип экрана', description: 'Super Retina XDR'},
        {id:11, title: 'Частота обновления', description: '60 Гц'},
        {id:13, title: 'Тип процессора', description: 'A14 Bionic'},
        {id:14, title: 'Встроенная память (ROM)', description: '128 ГБ'},
    ]
    return (
        <Container className='mt-4'>
            <Row>
                <Col md={4}>
                    <Image width={400} height={500} src={device.img}/>
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
                            {description.map(info => 
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