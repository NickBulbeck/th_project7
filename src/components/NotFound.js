import React from 'react';

const NotFound = (match) => {
  console.log(match);
  return (
    <div>
      <h3>Page not found</h3>
      <p>The page you requested does not exist. Please try something else.</p>
    </div>
  )
}

export default NotFound;