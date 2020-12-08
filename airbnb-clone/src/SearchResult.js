import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
    img,
    location, 
    title,
    description,
    star,
    price, 
}) 
{
    return (
        <div className='SearchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className='SearchResult__heart' />
            <div className='SearchResult__info'>
                <div className='SearchResult__infoTop'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_________________</p>
                    <p>{description}</p>
                </div>
                <div className='SearchResult__infoBottom'>
                    <div className='SearchResult__stars'>
                        <StarIcon className='SearchResult__star'/>
                        <p><strong>{star}</strong></p>
                    </div>

                    <div className='SearchResult__price'>
                        <h2>{price}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
