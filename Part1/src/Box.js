import React from "react";

function Box({id, width, height, handleRemove, backgroundColor}) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div style={{height: `${height}em`, width: `${width}em`, backgroundColor}}/>
      <button onClick={remove}>X</button>
    </div>
  );
}

export default Box;