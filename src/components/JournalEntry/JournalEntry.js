import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import dayjs from 'dayjs'
import Truncate from 'react-truncate'
import MarkerIcon from '../../images/Marker.svg'

export default function JournalEntry({ values }) {
  const parsedDate = dayjs(values.date)

  return (
    <EntryContainerLink to={`/${values.id}`}>
      <JournalEntryStyled>
        <DateStyled>{parsedDate.format('DD MMM YYYY')}</DateStyled>

        <ContentStyled>
          <CategorieStyled>{values.category}</CategorieStyled>
          <CityStyled>
            <MarkerIconStyled src={MarkerIcon} />
            {values.city}
          </CityStyled>
          <CaptionStyled>{values.caption}</CaptionStyled>
          <MemoryStyled>
            <Truncate lines={2} ellipsis={<span>... see more</span>}>
              {values.memory}
            </Truncate>
          </MemoryStyled>
        </ContentStyled>
      </JournalEntryStyled>
    </EntryContainerLink>
  )

  // function routeChange() {
  //   let path = `/${values.id}`
  //   history.push(path)
  // }
}

const EntryContainerLink = styled(Link)`
  position: relative;
  display: block;
  text-decoration: none;

  height: 90px;
  width: 100%;
`

const JournalEntryStyled = styled.div`
  color: var(--primary);
  display: grid;

  grid-template-columns: 18% 82%;
  grid-template-rows: 1fr;
  margin: 20px 15px;
`

const DateStyled = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: light;
  align-self: center;
`

const ContentStyled = styled.div`
  padding: 10px 5px 10px 20px;
  font-family: Roboto;
`

const CategorieStyled = styled.h2`
  display: inline-block;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1.3px;
`
const MarkerIconStyled = styled.img`
  color: #8e969e;
  height: 8.5px;
  vertical-align: baseline;
  padding-right: 5px;
`

const CityStyled = styled.h3`
  font-size: 10px;
  color: #8e969e;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: 5px;
`

const CaptionStyled = styled.h3`
  display: block;

  font-size: 12px;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: 3px;
`
const MemoryStyled = styled.p`
  font-size: 9px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;

  a {
    text-decoration: none;
    font-size: 9px;
    font-family: Roboto;
    font-weight: 500;
    color: #86727c;
  }
`
