import { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const ClinicContext = createContext('light');

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {...state, dark: !state.dark};
        case 'GET_USERS':
          return {...state, axios: action.payload};
        case '':
          return
        default:
            throw new Error();
  }
}



const initialState = {
    dark: false,
    axios: []
}




const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
      axios(url)
        .then((res) => dispatch({type: 'GET_USERS', payload: res.data})) //?
        .catch((err) => console.log(err));
    }, []);


    // useEffect(() => {
    //   localStorage.setItem('fav', JSON.stringify(fav));
    //   }, [fav]);
    

  return (
    <ClinicContext.Provider value={{ state, dispatch }}>
      {children}
    </ClinicContext.Provider>
  )
}


export const useClinicContext = () => {
    return useContext(ClinicContext);
  };

export default Context