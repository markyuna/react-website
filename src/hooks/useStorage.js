import {useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp} from '../firebase/config';

const useStorage = (file) =>{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    // à chaque fois qu'un nouveau fichier est uploader, le hook se met en route.
    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        //  enregistrer  l'url dans une collection firebase
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) =>{
            let percentageProgress = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentageProgress);

        }, (err) => {
            setError(err);
        }, async()=>{

            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url, createdAt});
            setUrl(url);

        })
    },[file]);
    return{progress, url, error}
}

export default useStorage;
