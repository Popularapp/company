import React,{useState} from 'react';
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Main from "./components/Main/Main";
import data from "./json/data.json";
import PopUp from "./components/PopUp/PopUp";
import FilteredArray from "./components/FilteredArray/FilteredArray";

const cards = data.videosData;

function App() {

    const [video, setVideo] = useState({});
    const [filteredArray, setFilteredArray] = useState({});

    function onCardClick(a) {
        setVideo(a);
    }

    function closePopUp(){
        var b = {};
        setVideo(b);
    }

    function updateFilter(obj){
        setFilteredArray(obj);
    }

  return (
      <div>
          <div className="bg"></div>
          <Header></Header>
          <Slider cards={cards} updateFilterObj={updateFilter}></Slider>
          {Object.keys(filteredArray).length === 0 && filteredArray.constructor === Object? '' : <FilteredArray cards={cards} cardFunction={onCardClick}></FilteredArray>}
          <Main cards={cards} cardFunction={onCardClick}></Main>
          <PopUp video={video} onClosePopUp={closePopUp}></PopUp>
      </div>
  );
}

export default App;
