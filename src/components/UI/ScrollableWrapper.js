import styled from 'styled-components'

export const ScrollableWrapper = styled.div`
  height: 75%;
  overflow-y: scroll;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`