import React, { useState } from "react";
import app from "../FirebaseConfig"
import { getDatabase, ref, get, remove } from "firebase/database";
import { useNavigate } from "react-router-dom";

function Read() {

    const navigate = useNavigate();

    let [userArray, setUserArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "users/");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            const myData = snapshot.val();
            const tempArray = Object.keys(myData).map(myUid => {
                return {
                    ...myData[myUid],
                    uid: myUid
                }
            })
            setUserArray(tempArray);
        } else{
            alert("error")
        }
    }
    
    const deleteUser = async (uidParam) => {
        const db = getDatabase(app);
        const dbRef = ref(db, "users/"+uidParam);
        await remove(dbRef);
        fetchData()
    }

  return (
    <div>
        <h2>Users Information</h2>
        <button onClick={fetchData}>Display Users</button>
        <ul>
            {userArray.map( (item, index) => (
                <li key={index}> 
                {item.user}: {item.password} : {item.uid}
                <button className='button1' onClick={ () => navigate(`/update/${item.uid}`)}>UPDATE</button>
                <button className='button1' onClick={ () => deleteUser(item.uid)}>DELETE</button>
                </li>
        ) )}
      </ul>
      <br/>
      <br/>

      <button className='button1' onClick={ () => navigate("/")}>GO HOMEPAGE</button> <br />

    </div>
  )
}

export default Read