import { useEffect, useState } from "react";


//This will show status of users
const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);
    
    //Check if online 

    useEffect(() => {

        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        })

        window.addEventListener('online', () => {
            setOnlineStatus(true);
        })

    },[])

    //boolean value
    return onlineStatus;
}

export default useOnlineStatus;