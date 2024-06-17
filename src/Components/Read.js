import React, { useState } from "react";
import app from "../FirebaseConfig"
import { getDatabase, ref, get } from "firebase/database";


function Read() {
    let [userArray, setUserArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "users/");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            console.log(snapshot.val())
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
    </div>
  )
}

export default Read