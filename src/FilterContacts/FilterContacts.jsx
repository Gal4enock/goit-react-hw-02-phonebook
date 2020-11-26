import React from 'react';

export default function Filter({value, toFilter}) {
  return (
    <div>
      <input type="text" value={ value} onChange={ e=>toFilter(e.target.value)}/>
    </div>
  )
}