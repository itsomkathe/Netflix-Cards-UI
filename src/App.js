import React from 'react';
import './index.css';
import Card from './Card';
import Heading from './Heading';
import data from './SeriesData';

function App(){
    return (
        <>
            <Heading/>
            <div className = "container">
                {data.map((val)=>{
                        return(
                        <Card
                            key = {val.key}
                            name = {val.name}
                            posterLink = {val.posterLink}
                            link = {val.link}
                            rating = {val.rating}
                        />)
                    })}
            </div>
            <div className = "footer">
                <h5>Made with <span className = "react">ReactJS</span> by Om</h5>
            </div>
        </>
    );
}

export default App;