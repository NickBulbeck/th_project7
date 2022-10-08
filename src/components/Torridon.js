import React from 'react';
import Foties from './Foties';

const Torridon = (props) => {
  console.log(props.location);
  console.log("We're rendering Torridon.")
  return (
    <Foties content={props.content} searchTerm="torridon" />
  )
}

export default Torridon;