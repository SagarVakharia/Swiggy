import { useEffect, useState } from "react";
import { Menu_Url } from "./constants";

const useMenu = (resId) => {
    // Fetching  the menu data for a given restaurant id.

    const [resInfo, setResInfo] =  useState(null);

    useEffect(() => {
        fetchMenu();
    },[]) // we want to fetch data only once so we write empty dependency array here.

    const fetchMenu = async () => {
        const data = await fetch(Menu_Url + resId.resId)

        const json = await data.json();
        // console.log(json);
        // console.log(json.data);
        setResInfo(json.data);
    }


    return resInfo;
}

export default useMenu;