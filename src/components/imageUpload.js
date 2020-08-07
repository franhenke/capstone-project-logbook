import React, { useRef } from 'react'
import { storage } from 'firebase'
import cameraIcon from '../images/camera.svg'
import styled from 'styled-components'

export default function ImageUpload({ props, setFileUrl }) {
  const hiddenFileInput = useRef(null)
  const handleClick = (event) => {
    hiddenFileInput.current.click()
  }

  const onFileChange = async (event) => {
    console.log(event.target)
    const file = event.target.files[0]
    props.handleFile(file)
    const storageRef = storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL())
  }

  return (
    <>
      <ImageUploadStyled>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={onFileChange}
          style={{ display: 'none' }}
        />
      </ImageUploadStyled>
    </>
  )
}

const ImageUploadStyled = styled.label`
  position: absolute;
  bottom: 80px;
  background-image: url(${cameraIcon});
  background-repeat: no-repeat;
  background-size: 22px 22px;
  width: 150px;
  height: 25px;
  border-radius: 5px;

  cursor: pointer;
  input {
    display: none;
  }
`
