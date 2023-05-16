import React, {useState} from 'react';
import ProgressBar from "./progressBar";
const UploadForm = () => {

    const [file, setFile] = useState(null);
    // message d'erreur
    const [error, setError] = useState(null)
    // autoriser uniquement des photos de type png et jpeg.
    const types =['image/png', 'image/jpeg'];

    const changeHandler = (e) =>{
        let selectPhoto = e.target.files[0];

        // si on a ajouter une photo cette photo sera selectionnée.
        if(selectPhoto && types.includes(selectPhoto.type)){
            setFile(selectPhoto );
            setError("");
        }else{
            setFile(null);
            setError("Veuillez sélectionner une photo de format png ou jpeg s'il-vous-plait. ");
        }
    }
    return(
        <form>

            <input type="file" className="label" onChange={changeHandler}/>
            <div className="output">
                {/* afficher un message d'erreur ou le nom de l'image.  */}
                {/* s'il y a une erreur alors elle s'affiche, s'il y a un fichier, alors le nom et la barre de progress s'affiche. */}
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}

            </div>
        </form>
    )
}
export default UploadForm;
