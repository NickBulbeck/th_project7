import React from 'react';

// stateless component
const Foties = (props) => {
  return (
    <div className="photo-container">
      <h2>Results for '{props.searchTerm}'</h2>
        <ul>
          {props.content.map((image) => (
            <li key={image.id}>
              <img src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                title={image.title}
                alt={image.title} >
              </img>

            </li>
          ))}
        </ul>
    </div>
  );
}

export default Foties;

