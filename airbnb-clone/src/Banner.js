import React, { useState } from 'react';
import './Banner.css';
import {Button} from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search/>}

                <Button onClick={() => setShowSearch(!showSearch)}
                className='banner__searchBut'
                variant='outlined'>
                    Search Date
                </Button>
            </div>
            <div className='banner__info'>
                <h1>De xem them duoc 
                    nhieu hinh anh</h1>
                <h5>
                    Len ke hoach tung ngay, hoan thanh muc tieu tung ngay
                </h5>
                <Button variant='outlined' onClick={() => history.push('/search')}>
                    Explore Nearby
                </Button>
            </div>
        </div>
    )

}

export default Banner
