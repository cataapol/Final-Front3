import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import {useClinicContext} from '../Context/Context'



const Detail = () => {


  const params = useParams();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
  
  const {state} = useClinicContext();
  //-------------------------------API CONSULTA DETAILS - ID

  
  
  console.log(params);


  // useEffect(() => {
  //     axios(url)
  //       .then((res) => setDentist(res.data));
  // }, []);



  return (
    <div className={state.dark ? 'dark' : 'light'}>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <div>
        <h2>{params.id}</h2>
        
        {/* Name */}
        <h2>Full Name: {}</h2> 

        {/* Email */}
        <h2>Email: {}</h2> 

        {/* Telefono */}
        <h2>Contact: </h2>
        
        {/* Sitio Web */}
        <h2><a>Website:</a></h2>

      </div>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico ?? MAP W/ LOCALSTORAGE?? */}
    </div>
  )
}

export default Detail