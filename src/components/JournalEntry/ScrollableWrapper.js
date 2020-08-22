import styled from 'styled-components'

export const ScrollableWrapper = styled.div`
  height: 84%;
  overflow-y: scroll;

  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`