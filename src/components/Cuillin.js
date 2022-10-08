import React from 'react';
import Foties from './Foties';

const Cuillin = (props) => {
  console.log("We're rendering Cuillin.")
  return (
    <Foties content={props.content} searchTerm="skye cuillin" />
  );
}

export default Cuillin;