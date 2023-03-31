import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import React, { useContext, useEffect, useState } from 'react';
import Form from "react-bootstrap/esm/Form";
import { Context } from '../../index';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceApi';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i)) // если номер совпадает с номер элемента итерации, тогда возвращаем новый объект, разворачиваем в него хак-ку и по ключу заменяем поле, если номер не совпадает возращаем неизмененным
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    return (
		<Modal
            show={show}
            onHide={onHide}
			size='lg'
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Добавить новое устройство
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
                <Form>
                    <Dropdown className='mt-2'>
                        <Dropdown.Toggle>{device.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>{device.types.map(type =>
                            <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                        )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2'>
                        <Dropdown.Toggle>{device.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>{device.brands.map(brand =>
                            <Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                        )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className='mt-2'
                        placeholder='Введите название устройства'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Control
                        className='mt-2'
                        placeholder='Введите стоимость устройства'
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        type='number'
                    />
                    <Form.Control
                        className='mt-2'
                        type='file'
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button 
                    variant='outline-dark'
                    onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {
                        info.map(i =>
                           <Row className='mt-3' key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder='Название характеристики'
                                        value={i.title}
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder='Описание характеристики'
                                        value={i.description}
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button 
                                    variant='outline-danger'
                                    onClick={() => removeInfo(i.number)}
                                    >Удалить</Button>
                                </Col>
                           </Row> 
                        )
                    }
                </Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
			</Modal.Footer>
		</Modal>
    );
});

export default CreateDevice;