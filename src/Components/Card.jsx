import { Link } from 'react-router-dom';
import {routes} from './utils/routes';
import {useClinicContext} from '../Context/Context'
import { useState, useEffect } from 'react';
import '../index.css'


const Card = ({patient}) => {
  const { id, name, username } = patient;
  console.log(id);


  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    setCart((prev) => {

    })
  }


  const {dispatch} = useClinicContext();



  return (
    <div className="card">
          <Link to={`${routes.detail}${patient.id}`}>
          <img src='../images/doctor.jpg'></img>
          <h3>{patient.name}</h3>
          <h3>{patient.username}</h3>
          </Link> 
        
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        <button className='add-fav' onClick={addFav}>
          Add fav
          </button>
    </div>
  );
};

export default Card;
