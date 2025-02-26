import React from 'react';

const App = () => {
  const items = ['Apple', 'Banana', 'Orange'];

  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
