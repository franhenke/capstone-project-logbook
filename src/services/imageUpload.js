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
        />
      </ImageUploadStyled>
    </>
  )
}

const ImageUploadStyled = styled.label`
    cursor: pointer;
  
  input {
   width: 300px;
  }
`
