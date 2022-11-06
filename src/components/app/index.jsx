import React from 'react'
import Modal from '../modal'
import styles from './App.module.css'
import { APP_CONTEXT } from '../../context'


function App() {

  const { modalToggleBag } = React.useContext(APP_CONTEXT);
  const { showModal, setShowModal } = modalToggleBag;

  const { optionsBag } = React.useContext(APP_CONTEXT);
  const { options, setOptions } = optionsBag;




  return (
    <div>

      {

        showModal && <Modal options={options} />

      }
      
      <button className={styles.modal_toggle_button} onClick={() => setShowModal((prev)=>!prev)}>Show Modal</button>



    </div>
  )
}

export default App