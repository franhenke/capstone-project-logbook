import React, { useState } from 'react'
import { storage } from 'firebase'

export default function ImageUpload({ setFileUrl }) {
  const onFileChange = async (e) => {
    console.log(e.target)
    const file = e.target.files[0]
    const storageRef = storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL())
  }

  return (
    <>
      <input type="file" onChange={onFileChange} />
      {/* <div onClick={onFileChange}>Add photo</div> */}
    </>
  )
}
