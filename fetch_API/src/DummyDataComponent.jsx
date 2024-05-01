import React, { useState, useEffect } from 'react';

function DummyDataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dummy JSON Data</h2>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <strong>{item.title}</strong>: {item.body}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default DummyDataComponent;
