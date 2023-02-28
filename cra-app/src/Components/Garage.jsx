import React from 'react';

function Car() {
  return <h2>I am a Car!</h2>;
}

export default function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}
