import React from 'react';
import Foties from './Foties';

const Fisherfield = (props) => {
  console.log("We're rendering Fisherfield.")
  return (
    <Foties content={props.content} searchTerm="fisherfield" />
  );
}

export default Fisherfield;