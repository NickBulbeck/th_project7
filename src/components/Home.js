import React from 'react';
import Foties from './Foties';

const Home = (props) => {

  return (
    <Foties content={props.content} searchTerm="forever friends bear" />
  );
}

export default Home;