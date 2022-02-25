import React from 'react';

export function Sample() {
    return <p>sample</p>
}
// https://www.w3schools.com/howto/img_avatar.png
function Card(props) {

    const { imgUrl, name, title, action } = props;

    return (
        <div className="card">
            <img src={imgUrl} alt="Avatar" style={{
                width: "100%"
            }}  />
            <div className="container">
                <h4><b>{name}</b></h4>
                <p>{title}</p>
                <button onClick={action}>Change</button>
            </div>
            
        </div>
    )
}

export default Card;