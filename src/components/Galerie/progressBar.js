import React, { useEffect } from "react";
import useStorage from  "../hooks/useStorage";


const ProgressBar = ({file, setFile}) =>{

    const {url, progress } = useStorage(file);
    // S'il y a une url alors la barre de progress disparait.
    useEffect(() => {
        if(url){
            setFile(null);
        }
    }, [url, setFile])


    return(
        <div className="progress-bar" style={{width: progress + "%"}}></div>
    )
}

export default ProgressBar;
