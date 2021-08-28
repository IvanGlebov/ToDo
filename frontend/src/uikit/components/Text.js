import styled from 'styled-components'
import Edit from '@assets/icons/Edit.svg'


const Text = styled.p`
  ${({ inline }) => inline && 'display: inline-block;'}
  font-size: ${({ xsmall, small, large, size }) => {
    if (size) return size
    if (xsmall) return '0.875rem'
    if (small) return '1rem'
    if (large) return '1.5rem'
    return '1.125rem'
  }};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ height, size }) => `calc(${size || '100%'} + ${height || '8px'})`};
  ${({ gradient }) => gradient && `
    background: ${gradient.indexOf('-gradient') !== -1 ? gradient : `var(--${gradient})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
  color: ${({ color }) => color ? (color.indexOf('#') !== -1 ? color : `var(--${color})`) : 'var(--text)'};
  ${({ link }) => link && `
    cursor: pointer;
    padding: 0 1px 3px;
    color: var(--blue3);
    border-bottom: 2px solid var(--blue3);
  `}
  ${({ nowrap }) => nowrap && `
    white-space: nowrap;
  `}
  /* background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  text-align: ${props => props.align};
  ${({ margin }) => margin && `
    margin: ${margin};
  `};
  ${({ cancel, color, cancelColor }) => cancel && `
    position: relative;
    display: flex;
    align-items: flex-end;
    &::after {
      content: '';
      width: 110%;
      height: 2px;
      position: absolute;
      bottom: 45%;
      transform: rotate(-10deg);
      background: ${cancelColor ? `var(--${cancelColor})` : color? `var(--${color})`: '#000'};
      left: 0;
    }
    span {
      margin-left: 4px;
    }
  `};
  ${({ edit, size, color }) => edit && `
    &:after {
      display: inline-block;
      margin-left: 3px;
      width: ${size};
      height: calc(${size} - 1px);
      background-color: ${color ? (color.indexOf('#') !== -1 ? color : `var(--${color})`) : 'var(--text)'};
      -webkit-mask-image: url(${Edit});
      mask-image: url(${Edit});
      mask-size: 100%;
      content: '';
    }
  `}
`

export default Text
