import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';

function AllCollapseExample() {
    const {device} = useContext(Context)
    return (
        <Accordion>
            {device.types.map((type, i) =>
                <Accordion.Item eventKey={i} key={type.id}>
                    <Accordion.Header>{type.name}</Accordion.Header>
                    <Accordion.Body>
                    {device.brands.map(brand => 
                        <li
                        key={brand.id}
                        className='p-2'
                        >
                            {brand.name}
                        </li>
                    )}
                    </Accordion.Body>
                </Accordion.Item>
            )}
        </Accordion>
    );
}

export default AllCollapseExample;