import React from 'react'
import { storage } from 'firebase'
import styled from 'styled-components'

export default function ImageUpload({ setFileUrl }) {
  const onFileChange = async (event) => {
    console.log(event.target)
    const file = event.target.files[0]

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
          onChange={onFileChange}
        // style={{ display: 'none' }}
        />
      </ImageUploadStyled>
    </>
  )
}

const ImageUploadStyled = styled.label`
    
  background-repeat: no-repeat;
    cursor: pointer;
    margin-bottom: 50px;
  input {
    
   width: 200px;
   
   

  }
`
