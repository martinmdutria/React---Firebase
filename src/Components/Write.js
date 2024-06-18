import React, { useState } from "react";
import app from "../FirebaseConfig"
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

function Write() {

    const navigate = useNavigate();

    let [inputValue1, setInputValue1] = useState("");
    let [inputValue2, setInputValue2] = useState("");

    const SaveData = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "users/"));
        set(newDocRef, {
            user: inputValue1,
            password: inputValue2
        }).then( ()=> {
            alert("data saved successfully")
        }).catch((error) =>{
            alert("error: ", error.message)
        })

    } 

  return (
    <div>
        <h2>User Sign Up</h2>

        <label for="user-input">User: </label>
        <input id="user-input" type="text" value={inputValue1}
        onChange={(e)=> setInputValue1(e.target.value)}/><br/>

        <label for="pass-input">Password: </label>
        <input id="pass-input" type="text" value={inputValue2}
        onChange={(e)=> setInputValue2(e.target.value)}/><br/>

        <button onClick={SaveData}>Sign Up</button>
        <br/>
        <br/>

        <button className='button1' onClick={ () => navigate("/")}>GO READ</button> <br />
      <button className='button1' onClick={ () => navigate("/updateread")}>GO UPDATEREAD</button>
    </div>
  )
}

export default Write