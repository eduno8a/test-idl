import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import moment from 'moment';

function Dashboard(props) {



  return (
    <div>

      {props.dataUser.gender ?
      <div className='card_content'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <div className='card_img_content' style={{background: `url(${props.dataUser.picture.large})`}}>
            </div>
            <h2 className='subTitle1 textAlignC'> {props.dataUser.name.first + '' + props.dataUser.name.last} </h2>

            
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container>
              
              <Grid item xs={12}>
                <h2 className='title1'>General data</h2>  
              </Grid>
              <Grid item xs={12} className='separatorTB10'></Grid>

              <Grid item xs={12} md={4} >
                <h2 className='text1'> <span className='subTitle2'>Birthdate:</span> {moment(props.dataUser.dob.date).format('DD-MM-YYYY')}</h2>
              </Grid>
              <Grid item xs={12} md={4} >
                <h2 className='text1'> <span className='subTitle2'>Registered:</span> {moment(props.dataUser.registered.date).format('DD-MM-YYYY')}</h2>
              </Grid>
              <Grid item xs={12} md={4} >
                <h2 className='text1'> <span className='subTitle2'>Gender:</span> {props.dataUser.gender}</h2>
              </Grid>
              <Grid item xs={12} className='separatorTB10'></Grid>
              
              <Grid item xs={12} md={4} >
                <h2 className='text1'> <span className='subTitle2'>Phone:</span> {props.dataUser.phone}</h2>
              </Grid>
              <Grid item xs={12} md={4} >
                <h2 className='text1'> <span className='subTitle2'>Cell:</span> {props.dataUser.cell}</h2>
              </Grid>
              <Grid item xs={12} className='separatorTB10'></Grid>

              <Grid item xs={12}>
                <h2 className='text1'> <span className='subTitle2'>Email:</span> {props.dataUser.email}</h2>
              </Grid>
              <Grid item xs={12} className='separatorTB20'></Grid>

              <Grid item xs={12}>
                <h2 className='title1'>Location</h2>  
              </Grid>
              <Grid item xs={12} className='separatorTB10'></Grid>


              <Grid item xs={12} md={4} >
                <h2 className='text1'> <span className='subTitle2'>Street:</span> {props.dataUser.location.street.name + ' '+ props.dataUser.location.street.number}</h2>
              </Grid>
              <Grid item xs={12} md={4} >
                <h2 className='text1'> <span className='subTitle2'>City:</span> {props.dataUser.location.city}</h2>
              </Grid>
              <Grid item xs={12} md={4} >
                <h2 className='text1'> <span className='subTitle2'>State:</span> {props.dataUser.location.state}</h2>
              </Grid>
              <Grid item xs={12} className='separatorTB10'></Grid>


              <Grid item xs={12} md={4} >
                <h2 className='text1'> <span className='subTitle2'>Country:</span> {props.dataUser.location.country }</h2>
              </Grid>
              <Grid item xs={12} md={4} >
                <h2 className='text1'> <span className='subTitle2'>Post code:</span> {props.dataUser.location.postcode}</h2>
              </Grid>
 

  

            </Grid>
            
          </Grid>
        </Grid>
      </div>
      :
      <h2>Cargando</h2>
      }
    </div>
  );
}

export default Dashboard;
