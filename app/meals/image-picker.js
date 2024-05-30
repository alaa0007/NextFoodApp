'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

const ImagePicker = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState(null);
    const imageInputRef = useRef(null);
  
    const  handleImageBtnClick = () => {
      imageInputRef.current.click();
    }

    const handleImageChange = (event) => {
      const image = event.target.files[0];
      if(!image) {
        setPickedImage(null);
        return;
      }
      const fileReader = new FileReader();
      fileReader.readAsDataURL(image);
      fileReader.onload = () => {
        setPickedImage(fileReader.result);
      }
    }

    return (
    <div className={classes.picker}>
      <label htmlFor={name} >{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview} onClick={handleImageBtnClick} >
            {
                pickedImage ? 
                    <Image src={pickedImage} alt="Preview" fill/> 
                : 
                    <p>No image picked</p>
            }    
        </div>
        <input
            ref={imageInputRef}
            type="file"
            name={name}
            id={name}
            accept="image/png, image/jpeg, image/jpg"
            className={classes.input}
            onChange={handleImageChange}
            required
        />
      </div>
    </div>
  )
}

export default ImagePicker