import React from 'react';
import './FilteredArray.css';

const FilteredArray = (props) => {

    function whenCardClicks(value){
        props.cardFunction(value);
    }

    return (
        <div className="container main-container">
            <h5 className="allVideos">Videos on Resp. Devices</h5>
            <div className="row">
                {props.cards.map((card,index) =>(
                    <div className="col-lg-3 col-md-6 col-12" key={index}>
                        <div className="card" onClick={() =>{whenCardClicks(card)}}>
                            <div className="image">
                                <img src={card.thumbnailUrl}/>
                            </div>

                            <div className="text">
                                <h5>{card.title}</h5>
                                <p>{card.description}</p>
                            </div>

                            <div className="icon">
                                <a href="#"><i className="fas fa-heart"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <br/><br/>
        </div>
    );
}

export default FilteredArray;
