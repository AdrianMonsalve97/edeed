import React from 'react';

import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Apiurl } from './services/apirest';
import Login from './Componentes/Login'
import Posts from './Componentes/Posts';
import  { useEffect, useState } from 'react';
import axios from 'axios';


const BASE_URL = Apiurl;
const APP_ID = {"app-id": "62baa461f5b66e5721af0b5d"};

const App =()=> { 
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
      setLoading(true);
      axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
          .then(({ data }) => setData(data))
          .catch(console.error)
          .finally(() => setLoading(false));
  }, []);

  return (

    <React.Fragment>
      <Router>
        <Routes >
          <Route path="/" element ={<Login />} exact render />
          <Route path="/posts" element={<Posts />} exact render />
        </Routes>
      </Router>
      <div>
           {loading && "Loading..."}
           {JSON.stringify(data)}
        </div>
    </React.Fragment>
  );
}

export default App;
