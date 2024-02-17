import React, { useState } from 'react'
import './modal.css'
import { MdCancelPresentation } from "react-icons/md";


const Modal = (props) => {
    const storedData = JSON.parse(localStorage.getItem("items")) || [];
    const { toggle } = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [saveDatas, setSaveDatas] = useState(storedData);

    function handleFirstName(e) {
        setFirstName(e.target.value)
    }

    function handleLastName(e) {
        setLastName(e.target.value)
    }

    function handleSave() {
        const newDatasArray = [...saveDatas, { firstName, lastName }]
        setSaveDatas(newDatasArray)
        localStorage.setItem("items", JSON.stringify(newDatasArray))
    }

    return (
        <>
            <div className="modal">
                <h2 className='modal_title'>Create your account</h2>
                <MdCancelPresentation className='modal_cancel' onClick={toggle} />

                <div className="container">

                    <div className="container_input">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" name="firstName" id="firstName" placeholder='First name' onChange={handleFirstName} />
                    </div>

                    <div className="container_input">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" name="lastName" id="lastName" placeholder='Last name' onChange={handleLastName} />
                    </div>

                <div className="container_buttons">
                    <button className="Save" onClick={handleSave}>Save</button>
                    <button className="Cancel" onClick={toggle}>Cancel</button>
                </div>

                </div>

            </div>

            <div>   
                {saveDatas ? saveDatas.map((item, index) =>

                <p key={index}>
                    {item.firstName ? item.firstName : ""}   
                    {item.lastName ? item.lastName : ""}
                </p> ) : ""} 

            </div>

        </>
    )
}

export default Modal