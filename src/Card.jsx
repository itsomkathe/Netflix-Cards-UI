import React from 'react';

function Card(props){
    return (<>
            <div className = "card">
                <img className = "image" src = {props.posterLink} ></img>
                <div className = "content">
                    <span className = "category">A NETFLIX ORIGINAL</span>
                    <h3>{props.name}</h3>
                    <div className = "rating">
                        <span className = "ratehead">RATING</span>
                        <h2 className = "ratenum">{props.rating}</h2>
                    </div>
                    <a className = "buttonlink" href = {props.link} target = "_blank">
                        <button href ={props.link}  className = "button">Watch Now</button>
                    </a>
                </div>
            </div>
    </>);
}

export default Card;