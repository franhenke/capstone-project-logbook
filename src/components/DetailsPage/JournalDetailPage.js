import React from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import book from '../../images/book-open.svg'
import mockphoto from '../../images/mock.jpg'
import chevron from '../../images/chevron-left.svg'
import MarkerIcon from '../../images/map-pin.svg'
import dayjs from 'dayjs'

export default function JournalDetailPage({ values }) {
  const { entryId } = useParams()
  const [selectedEntry] = values.filter((values) => entryId === values.id)
  const parsedDate = dayjs(selectedEntry.date)
  console.log(selectedEntry)
  return (
    <>
      <DetailPageWrapper>
        <StyledHeaderPic />
        <DateStyled>{parsedDate.format('ddd, DD MMMM YYYY')}</DateStyled>
        <CaptionStyled>{selectedEntry.caption}</CaptionStyled>
        <IconStyled src={book} alt="book" />

        <MemoryStyled>{selectedEntry.memory}</MemoryStyled>
        <CityStyled>
          <MarkerIconStyled src={MarkerIcon} />
          {selectedEntry.city}
        </CityStyled>
        <Link to={`/`}>
          <BackIconStyled src={chevron} alt="home" />
        </Link>
      </DetailPageWrapper>
    </>
  )
}

const DetailPageWrapper = styled.div`
  position: relative;
  margin: 10px;
  height: 100%;
  text-align: left;
  overflow: scroll;
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

const StyledHeaderPic = styled.div`
  position: relative;
  background-image: url(${mockphoto});
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;
  width: 100%;
  margin-bottom: 20px;
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
const MemoryStyled = styled.p`
  width: 90%;
  font-size: 16px;
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
