import React,{useState} from 'react';
import left from './images/left.png';
import right from './images/right.png';
import './Slider.css';

const Slider = (props) => {

    var [tagStyle,setTagStyle] = useState({'backgroundColor':'white'})
    // var [tagStyle,setTagStyle] = useState({'backgroundColor':'#bae5fa'})

    function onTagClick(tag){
        alert(tag);
        var obj = {};
        props.updateFilterObj(obj);
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
                            <button onClick={() => {onTagClick('fav')}}>Favourites</button>
                        </div>
                        <div className="col-lg-2 col-md-2 col-3">
                            <button onClick={() => {onTagClick('resp')}}>Resp. Devices</button>
                        </div>
                        <div className="col-lg-2 col-md-2 col-3">
                            <button onClick={() => {onTagClick('ct')}}>CT Scans</button>
                        </div>
                        <div className="col-lg-2 col-md-2 col-3">
                            <button onClick={() => {onTagClick('db')}}>DRTB</button>
                        </div>
                        <div className="col-lg-2 col-md-2 col-3">
                            <button onClick={() => {onTagClick('neurology')}}>Neurology</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
