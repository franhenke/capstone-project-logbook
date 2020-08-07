import React, { useState, useEffect, useContext } from 'react'
import { db } from '../firebase/index'
import LoginContext from './auth/LoginContext'
import Truncate from 'react-truncate'
import markerIcon from '../images/markerpin.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Divider } from './Divider/Divider'

export default function GetUserFavJournalsList() {

  const [favJournalsList, setFavJournalsList] = useState([])
  const { user } = useContext(LoginContext)

  useEffect(() => {
    if (!user) return

    const docRef = db.collection('favlist').doc(user.uid)

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setFavJournalsList(doc.data().journalEntries)
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error)
      })
  }, [user])

  return (
    <>

      {favJournalsList.map((values) => (
        <div key={values.caption} data-testid="journalEntry-navigation-item">
          <JournalEntryStyled>
            <ImageHeaderStyled>
              <img src={values.image} />

            </ImageHeaderStyled>


            <ContentStyled>
              <CaptionStyled>{values.caption}</CaptionStyled>
              <EntryStyled>
                <Truncate
                  lines={3}
                  ellipsis={
                    <span>
                      <LinkStyled to={`/home/favejournalentries/${values.caption}`}>
                        ... see more
                  </LinkStyled>
                    </span>
                  }
                >
                  {values.entry}
                </Truncate>
              </EntryStyled>
              <InfoStyled>
                <DateStyled>{values.date}</DateStyled>

                <CityStyled>
                  <MarkerIconStyled src={markerIcon} />
                  {values.place}
                </CityStyled>
                <CategorieStyled>{values.category}</CategorieStyled>
              </InfoStyled>
            </ContentStyled>

          </JournalEntryStyled>


        </div>

      ))}
    </>
  )
}


const ImageHeaderStyled = styled.div`
display: inline-block;
  width: 80vw;
    height: 80px;
  overflow: hidden;
  position: relative;
  margin-bottom: 5px;

  img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  object-position: 120% 80%;
    
  }
`

const JournalEntryStyled = styled.div`
color: var(--primary);
  height: 150px;
  margin-bottom: 40px;
`



const LinkStyled = styled(Link)`
text-decoration: none;
color: #8e969e;
`
const ContentStyled = styled.div`
position: relative;
font-family: Roboto;
display: flex;
flex-direction: column;
`

const InfoStyled = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: flex-end;

`

const DateStyled = styled.p`
color: #8e969e;
font-size: 11px;
margin-top: 10px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`
const CategorieStyled = styled.h3`
color: #8e969e;
position: relative;
font-size: 11px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: 500;
 
 `


const MarkerIconStyled = styled.img`
position: absolute;
height: 11px;
left: 0px;
top: 2px;
`

const CityStyled = styled.h3`
position: relative;
color: #8e969e;
font-size: 11px;
font-family: -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans - serif;
font-weight: 500;
margin: 0 20px;
padding-left: 10px;

`



const CaptionStyled = styled.h3`
font-size: 15px;
letter-spacing: 0.3px;
font-weight: 600;
margin-bottom: 3px;
`
const EntryStyled = styled.p`
font-size: 12px;
opacity: 0.8;
color: #8e969e;

span {
  text-decoration: none;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 400;
  color: #8e969e;
}
`
