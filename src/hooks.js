import React,{useCallback} from 'react';
import {useDropzone} from 'react-dropzone'

function MyDropZone() {
    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file) => {
            
            console.log(file.path)
        });
        console.log(acceptedFiles)
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return(
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select</p>
            }
        </div>
    )
}

export default MyDropZone;

