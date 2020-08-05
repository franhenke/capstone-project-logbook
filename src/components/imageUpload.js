import React from 'react'
import { storage } from 'firebase'
import { v4 as uuidv4 } from 'uuid'

export default function ImageUpload({ setFileUrl }) {
  const onFileChange = async (e) => {
    const imageId = uuidv4()
    console.log(e.target)
    const file = e.target.files[0]
    const storageRef = storage().ref(`/images/${imageId}_${file.name}`)
    const fileRef = storageRef.child(imageId + '_' + file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL())
  }

  return (
    <>
      <input type="file" onChange={onFileChange} />
    </>
  )
}
