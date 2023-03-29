import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import star from '../../assets/star.png'

const DeviceItem = ({device}) => {
    return (
        <Col md={3} className='mt-3'>
            <Card style={{width: 200, cursor: 'pointer'}} border={'light'}>
                <Image width={200} height={200} src={device.img}/>
                <div className='mt-1'>
                <div className='d-flex align-items-center mt-1'>
                    <div>{device.rating}</div>
                        <Image width={15} height={15} src={star}/>
                    </div>
                    <div style={{fontSize: 14}}>{device.name}</div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;