import React from 'react'
import * as ROUTES from '../../constants/routes'
import { useParams, Link } from 'react-router-dom'
import dayjs from 'dayjs'
import styled from 'styled-components'
import book from '../../images/book-open.svg'
import chevron from '../../images/chevron-left.svg'
import MarkerIcon from '../../images/map-pin.svg'


export default function JournalDetailPage({ values }) {
  const { entryId } = useParams()
  const [selectedEntry] = values.filter((values) => entryId === values.caption)
  const parsedDate = dayjs(selectedEntry.date)

  return (
    <>
      <DetailPageWrapper>
        <ImageHeaderStyled>
          <img src={selectedEntry.image} alt="" />
        </ImageHeaderStyled>
        <DateStyled>{parsedDate.format('ddd, DD MMMM YYYY')}</DateStyled>
        <CaptionStyled>{selectedEntry.caption}</CaptionStyled>
        <IconStyled src={book} alt="book" />

        <EntryStyled>{selectedEntry.entry}</EntryStyled>
        <CityStyled>
          <MarkerIconStyled src={MarkerIcon} alt="icon of a pin" />
          {selectedEntry.place}
        </CityStyled>
        <Link to={ROUTES.HOME}>
          <BackIconStyled src={chevron} alt="journalentry" />
        </Link>
      </DetailPageWrapper>
    </>
  )
}

const ImageHeaderStyled = styled.div`
display: inline-block;
  width: 90vw;
    height: 160px;
  overflow: hidden;
  position: relative;
  margin-bottom: 5px;

  img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  object-position: 120% 90%;
    
  }
`

const DetailPageWrapper = styled.div`
  position: relative;
  margin: 10px;
  height: 100%;
  text-align: left;
  overflow: scroll;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
  -webkit-overflow-scrolling: touch;
  grid-row: 1 / 3;
  text-align: center;
`

const BackIconStyled = styled.img`
  color: white;
  height: 25px;
  position: absolute;
  top: 20px;
  left: 10px;
`

const DateStyled = styled.p`
  font-size: 14px;
  color: var(--lighter);
  letter-spacing: 0.5px;
  margin-bottom: 5px;
`

const CaptionStyled = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  margin: 10px 0;
`

const IconStyled = styled.img`
  color: var(--highlight);
  height: 20px;
  margin: 20px 0;
`
const EntryStyled = styled.p`
  width: 90%;
  font-size: 14px;
  color: var(--primary);
  text-align: left;
  padding-left: 20px;
  margin-bottom: 15px;
`

const CityStyled = styled.p`
  position: absolute;
  color: white;
  top: 230px;
  right: 20px;

  font-size: 12px;
  letter-spacing: 0.5px;
`

const MarkerIconStyled = styled.img`
  color: #8e969e;
  height: 8.5px;
  vertical-align: baseline;
  padding-right: 5px;
`
