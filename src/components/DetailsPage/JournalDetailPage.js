import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function JournalDetailPage({ values }) {
  const { entryId } = useParams()
  const [selectedEntry] = values.filter((values) => entryId === values.id)
  console.log(selectedEntry)
  return (
    <>
      <DetailPageStyled>
        <Link to={`/`}>Go back to your entries</Link>
        <h2>{selectedEntry.date}</h2>
        <h2>{selectedEntry.city}</h2>
        <h2>{selectedEntry.caption}</h2>
        <p>{selectedEntry.memory}</p>
      </DetailPageStyled>
    </>
  )
}

const DetailPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`
