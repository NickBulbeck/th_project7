import React from 'react';

const NoResults = (props) => {
  return (
    <ul>
      <li className="not-found">
        <h3>No Results Found</h3>
        <p>Your search for '{props.searchTerm}' did not return any results. Please try again.</p>
      </li>
    </ul>
  )
}

export default NoResults;