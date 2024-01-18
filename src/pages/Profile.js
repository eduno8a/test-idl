import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import moment from 'moment';
import Card from '../components/Card'

function Profile() {

  const [dataU, setDatos] = useState({dataUser:{}})

  const fetchData = () => {
    return axios.get("https://randomuser.me/api/")
    .then((response) => { 
      setDatos(response.data.results[0]) 
    });
  }
  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className="content_main">
        {dataU.gender ?
      <h2 className='title1'>Profile:  <span className='subTitle2'> {dataU.name.title + ' ' + dataU.name.first +' '+dataU.name.last} </span> </h2>
          :
      <h2>Cargando</h2>
      }
      <Card dataUser={dataU} />
    </div>
  );
}

export default Profile;
