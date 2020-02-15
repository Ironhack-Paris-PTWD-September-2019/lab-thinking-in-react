import React from 'react';

export default function SearchBar({ searchterm }) {
  return (
    <div>
      <input className="input" onChange={searchterm} />
    </div>
  );
}

