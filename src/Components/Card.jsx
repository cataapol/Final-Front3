import { Link } from 'react-router-dom';
import {routes} from './utils/routes';
import {useClinicContext} from '../Context/Context'
import { useState, useEffect } from 'react';
import '../index.css'


const Card = ({patient}) => {

  const [fav, setFav] = useState([]);

  
  
  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(fav));
  }, [fav]);

  


  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const newFavs = [...fav, patient];

    setFav(newFavs)
  }


  const {dispatch} = useClinicContext();



  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
          <Link to={routes.detail + patient.id}>
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
