import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import Pagination from 'react-bootstrap/Pagination';

const Pages = observer(() => {
    const {device} = useContext(Context)
    const pages = [1, 2, 3, 4, 5]
    return (
        <Pagination>
            
        </Pagination>
    );
});

export default Pages;