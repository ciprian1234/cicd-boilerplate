import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({ empty: 'true' });
  React.useEffect(() => {
    async function fetchData() {
      // execute an api call to the backend
      const response = await axios({ url: 'http://localhost:4000/api' });
      setData(response.data);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default App;
