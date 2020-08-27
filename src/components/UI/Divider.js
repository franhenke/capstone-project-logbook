import styled from 'styled-components'

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => (props.color ? props.color : 'var(--lowopacity)')};
  margin-top: 0.8em;
`
