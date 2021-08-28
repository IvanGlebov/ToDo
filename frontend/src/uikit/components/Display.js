import styled from 'styled-components'

const StyledDisplay = styled.h1`
  font-size: ${({ small, large, size }) => {
    if (size) return size
    if (small) return '2rem'
    if (large) return '4rem'
    return '3rem'
  }};
  font-weight: ${({ bold }) => bold ? 800 : 'normal'};
`

export default StyledDisplay
