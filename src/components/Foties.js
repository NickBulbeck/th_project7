import React from 'react';
import NoResults from './NoResults';


// stateless component
const Foties = (props) => {
  if (props.content.length === 0) {
    return (
      <NoResults />
    )
  }
  return (
    <div className="photo-container">
      <p>IMPORTANT DISCLAIMER</p>
      <p>Please note that flickr is not google images. Nick Bulbeck And The Bears Productions cannot be held
         responsible for the weird stuff that the flickr api search method digs up, which may or may not have
         anything to do with the search term.</p>
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

