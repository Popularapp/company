import React,{useState} from 'react';
import left from './images/left.png';
import right from './images/right.png';
import './Slider.css';

const Slider = (props) => {

    var buttonStyle = {
        'backgroundColor':'#bae5fa'
    }

    function onTagClick(tag,selectedTag){
        var obj = [];
        for(var i=0;i<props.cards.length;i++){
            for(var j=0;j<tag.length;j++){
                if(props.cards[i].tags.indexOf(tag[j]) > -1){
                    obj.push(props.cards[i]);
                    break;
                }
            }
        }
        props.updateFilterObj(obj,selectedTag);
    }

    return (
        <div className="slider">
            <div className="row firstRow">
                <div className="col-lg-1 col-1">
                    <img src={left} alt=""/>
                </div>
                <div className="col-lg-10 col-10">
                    <div className="row">
                        <div className="col-lg-5">
                            <div>
                                <h2 className="title"><b>Diagnosis & Monitoring of airway diseases in the Era<br/>of Social Distancing</b></h2>
                                <br/>
                                <a href="#" className="watch-now">WATCH NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1 col-1">
                    <img src={right} alt=""/>
                </div>
            </div>
            <div className="row secondRow">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-2">
                            <p>Tags:</p>
                        </div>
                        <div className="col-lg-2 col-md-2 col-3">
                            {props.selectTag == "fav"? <button style={buttonStyle} onClick={() => {onTagClick(["fav"],"fav")}}>Favourites</button> : <button onClick={() => {onTagClick(["fav"],"fav")}}>Favourites</button> }
                        </div>
                        <div className="col-lg-2 col-md-2 col-3">
                            {props.selectTag == "lungs"? <button style={buttonStyle} onClick={() => {onTagClick(["asthma","copd","cancer"],"lungs")}}>Lungs</button>: <button onClick={() => {onTagClick(["asthma","copd","cancer"],"lungs")}}>Lungs</button>}
                        </div>
                        <div className="col-lg-2 col-md-2 col-3">
                            {props.selectTag == "heart"? <button style={buttonStyle} onClick={() => {onTagClick(["bp","heart","cancer"],"heart")}}>Heart</button>: <button onClick={() => {onTagClick(["bp","heart","cancer"],"heart")}}>Heart</button>}
                        </div>
                        <div className="col-lg-2 col-md-2 col-3">
                            {props.selectTag == "brain"? <button style={buttonStyle} onClick={() => {onTagClick(["tb"],"brain")}}>Brain</button> : <button onClick={() => {onTagClick(["tb"],"brain")}}>Brain</button>}
                        </div>
                        <div className="col-lg-2 col-md-2 col-3">
                            {props.selectTag == "liver"? <button style={buttonStyle} onClick={() => {onTagClick(["diabetes"],"liver")}}>Liver</button> : <button onClick={() => {onTagClick(["diabetes"],"liver")}}>Liver</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
