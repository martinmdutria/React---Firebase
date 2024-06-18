import React, { useState, useEffect } from "react";
import app from "../FirebaseConfig"
import { getDatabase, ref, set, get } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";

function Update() {

    const navigate = useNavigate();
    const {uid} = useParams()

    let [inputValue1, setInputValue1] = useState("");
    let [inputValue2, setInputValue2] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase(app);
            const dbRef = ref(db, "users/"+uid);
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                const targetObject = snapshot.val();
                setInputValue1(targetObject.user);
                setInputValue2(targetObject.password);
            } else{
                alert("error")
            }
        }
        fetchData()
    }, [uid])
    

    const UpdateData = async () => {
        const db = getDatabase(app);
        const newDocRef = ref(db, "users/"+uid);
        set(newDocRef, {
            user: inputValue1,
            password: inputValue2
        }).then( ()=> {
            alert("data updated successfully")
        }).catch((error) =>{
            alert("error: ", error.message)
        })

    } 

  return (
    <div>
        <h2>User Update</h2>

        <label for="user-update-input">User: </label>
        <input id="user-update-input" type="text" value={inputValue1}
        onChange={(e)=> setInputValue1(e.target.value)}/><br/>

        <label for="pass-update-input">Password: </label>
        <input id="pass-update-input" type="text" value={inputValue2}
        onChange={(e)=> setInputValue2(e.target.value)}/><br/>

        <button onClick={ () => UpdateData() && navigate(`/read`)}>Update</button>
        <br/>
        <br/>

        <button className='button1' onClick={ () => navigate("/")}>GO READ</button> <br />
      <button className='button1' onClick={ () => navigate("/read")}>GO UPDATEREAD</button>
    </div>
  )
}

export default Update