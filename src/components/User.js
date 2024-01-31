import React, { useEffect, useState} from 'react'


const User = () => {

  const [userInfo, setUserInfo] = useState({
    name: "Dummy",
    location: "Default",
  });

useEffect(()=>{
  fetchData();
},[])

const fetchData = async () => {
  const data  = await fetch("https://api.github.com/users/SagarVakharia");
  const json = await data.json();
  console.log(json);
  setUserInfo(json);
}

  return (
    <div className='user-card'>
        <h2>Name : {userInfo.name}</h2>
        <h3>Location : {userInfo.location}</h3>
        <h4>Contact : 789456123</h4>
    </div>
  )
}

export default User
