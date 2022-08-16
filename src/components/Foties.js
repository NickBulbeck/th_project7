import React from 'react';
// stateless component
const Foties = (props) => {
  return (
    <div className="photo-container">
      <h2>Results</h2>
        <ul>
          {props.content.map((image) => (
            <li key={image.id}>
              <img src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                alt={image.title} title={image.title}/>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Foties;