import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  font-size: ${({ xsmall, small, large, size }) => {
    if (size) return size
    if (xsmall) return '0.875rem'
    if (small) return '1rem'
    if (large) return '1.5rem'
    return '1.125rem'
  }};
  font-weight: 600;
`

export default StyledLink
