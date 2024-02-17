import React, { useState } from 'react';
import Modal from '../Modal/Modal';


const Home = () => {
    const [openModal, setOpenModal] = useState(false)

    function openModalBtn() {
        setOpenModal(!openModal)
    }

    return (
        <>
          <button onClick={openModalBtn}>Click</button>           
            {openModal && <Modal toggle={openModalBtn} />}
        </>
    )
}

export default Home;