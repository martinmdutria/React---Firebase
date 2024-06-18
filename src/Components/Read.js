import React, { useState } from "react";
import app from "../FirebaseConfig"
import { getDatabase, ref, get } from "firebase/database";
import { useNavigate } from "react-router-dom";

function Read() {

    const navigate = useNavigate();

    let [userArray, setUserArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "users/");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            setUserArray(Object.values(snapshot.val()));
        } else{
            alert("error")
        }
    }

  return (
    <div>
        <h2>Users Information</h2>
        <button onClick={fetchData}>Display Users</button>
        <ul>
            {userArray.map( (item, index) => (
                <li key={index}> 
                {item.user}: {item.password}
                </li>
        ) )}
      </ul>
      <br/>
      <br/>

      <button className='button1' onClick={ () => navigate("/")}>GO HOMEPAGE</button> <br />
      <button className='button1' onClick={ () => navigate("/updateread")}>GO UPDATEREAD</button>

    </div>
  )
}

export default Read