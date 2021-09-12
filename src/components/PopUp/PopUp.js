import React from 'react';
import './PopUp.css';

const PopUp = (props) => {
    // console.log(props.video.tags);
    var block;
    if(Object.keys(props.video).length === 0 && props.video.constructor === Object){
        block = {
            display:'none'
        }
        var tags = [];
    } else {
        block = {
            display: 'flex'
        }
        var tags = props.video.tags;
    }

    function closePopUp(){
        props.onClosePopUp();
    }

    return (
        <div className="popup" style={block}>
            <div className="popup-inside">
                <div className="videoCard">
                    <video controls>
                        <source src={props.video.thumbnailUrl} type="video/mp4"/>
                        <source src={props.video.thumbnailUrl} type="video/ogg"/>
                    </video>
                    <br/>
                    <div className="title">
                        <h5>{props.video.title}</h5>
                        <br/>
                        <div className="tags">
                            {tags.map((tag,index) => {
                                return <a href="#" key={index}>{tag}</a>;
                            })}
                        </div>
                        <br/>
                        <p className="desc">{props.video.description} <span>Show Less</span></p>
                    </div>
                </div>
                <div className="closeButton">
                    <a href="#" onClick={() => {closePopUp()}}><i className="fas fa-times"></i></a>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
