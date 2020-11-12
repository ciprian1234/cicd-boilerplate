import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

let API_URL = 'http://localhost:4000/api';
if (process.env.NODE_ENV === 'production') {
  API_URL = 'http://cippau.go.ro/cicd-boilerplate/api/api';
}

function App() {
  const [data, setData] = useState({ empty: 'true' });
  React.useEffect(() => {
    async function fetchData() {
      console.log('API_URL', process.env);
      // execute an api call to the backend
      const response = await axios({ url: API_URL });
      setData(response.data);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <p>{JSON.stringify(data)}</p>
      <p>Test deployment change: msg1</p>
    </div>
  );
}

export default App;
