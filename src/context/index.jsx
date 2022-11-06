import React from 'react'

import foodOptions from '../components/app/foodOption';

const APP_CONTEXT = React.createContext();


function AppContextProvider(props) {

  const [showModal, setShowModal] = React.useState(false)
  const [options, setOptions] = React.useState(foodOptions);

  const [chooseJSON, setChooseJSON] = React.useState({});
 

  const value = {
    modalToggleBag: {
        showModal,
        setShowModal,        
    },
    optionsBag:{
        options,
        setOptions
    },
    chooseJSONBag:{
        chooseJSON,
        setChooseJSON
    }


  }

  return (
    <APP_CONTEXT.Provider value={value}>
      {props.children}
    </APP_CONTEXT.Provider>
  )
}

export { APP_CONTEXT, AppContextProvider }