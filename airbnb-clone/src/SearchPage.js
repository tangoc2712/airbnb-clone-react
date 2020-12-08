import React from 'react';
import './SearchPage.css';
import { Button} from "@material-ui/core";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>27 users visit this site on December</p>
                <h1>Search for more!</h1>
                <Button variant="outlined"> CANCELATION FLEXIBILITY</Button>
                <Button variant="outlined"> TYPE OF PLACE</Button>
                <Button variant="outlined"> PRICE</Button>
                <Button variant="outlined"> ROOMS AND BEDS</Button>

        
                
            </div>
        </div>
    )
}

export default SearchPage
