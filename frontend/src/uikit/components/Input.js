import styled from 'styled-components'
import React, { Component } from 'react'
import { Flex, Text } from '..'
import { ReactComponent as EyeIcon } from '@assets/icons/Eye.svg'
import { ReactComponent as ArrOfferIcon } from '@assets/icons/arr_offer.svg'
import { ReactComponent as CloseIcon } from '@assets/icons/Close.svg'
import { ReactComponent as CheckIcon } from '@assets/icons/Check.svg'
import PropTypes from 'prop-types'
import cx from 'classnames'

const StyledInput = styled.div`
  width: 100%;
  position: relative;

  .icon {
    position: absolute;
    right: 0;
    height: 100%;
    display: inline-flex;
    align-items: center;
    margin-right: 24px;
    cursor: pointer;
  }

  .add {
    position: relative;
    color: var(--border-input);
    display: flex;
    align-items: center;

    border: 1px solid var(--border-input);
    padding: ${({compact}) => compact ? '11px 16px' : '16px'};

    &.button {
      padding: 0;
      border-radius: inherit;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;
      border: none;

      button {
        z-index: 1;
        height: 100%;
      }

      &::before {
        box-sizing: border-box;
        content: "";
        left: -2px;
        position: absolute;
        width: 50%;
        height: 100%;
        border: 1px solid;
        border-left: none;
      }
    }
  }

  .prepend {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    border-right: none;

    &.button {
      input {
        border-right: none;
      }

      &::before {
        background: #fff;
        border-right: none;
      }
    }
  }

  .append {
    position: absolute;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    border-left: none;
    right: 0;
    height: 100%;

    &.button {
      input {
        border-left: none;
      }

      &::before {
        background: #fff;
        border-left: none;
      }
    }
  }

  input, textarea {
    width: 100%;
    font-size: 16px;
    color: var(--text);
    border-radius: 16px;
    -webkit-box-shadow: 0px 0px 0px 1px var(--border-input) inset;
    -moz-box-shadow: 0px 0px 0px 1px var(--border-input) inset;
    box-shadow: 0px 0px 0px 1px var(--border-input) inset;
    border: none;
    /* border: 1px solid var(--border-input); */
    height: ${({compact}) => compact ? '50px' : '60px'};
    height: ${({height}) => height};
    padding: ${({compact}) => compact ? '11px 16px' : '16px'};
    padding: ${({padding}) => padding};
    ${({prepend}) => prepend && `
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left: none;
    `}
    ${({append}) => append && `
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: none;
    `}
    ${({success}) => success && `
      box-shadow: 0px 0px 0px 2px var(--success1) inset;
    `}
    ${({error}) => error && `
      box-shadow: 0px 0px 0px 2px var(--red1) inset;
    `}
    ${({icon}) => icon && `
      padding-right: 68px;
    `}
    padding-right: ${({icon}) => icon && '68px'};

    &:focus {
      box-shadow: 0px 0px 0px 2px var(--blue3) inset;
        /* ${({prepend}) => prepend && `
        border-left-color: transparent;
      `} */

      ${({append}) => append && `
        border-right: none;
      `}
      & + .add.button::before {
        border-top-width: 2px;
        border-bottom-width: 2px;
        border-color: var(--blue3);
      }
    }

    &:focus + span {
      opacity: 0;
    }

    & + span {
      opacity: ${props => props.modify ? 0 : 1};
      position: absolute;
      transition: .3s;
      top: 8px;
      left: 12px;
      font-size: 14px;
      color: var(--light);
    }
  }

  textarea {
    height: 140px;
    max-height: 200px;
    max-width: 100%;
    resize: none;
  }

  label {
    display: inline-block;
    margin-bottom: 2px;
  }

  .password-btn {
    position: absolute;
    top: ${({compact}) => compact ? '11px' : '16px'};;
    right: 14px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 4px;

    & > svg {
      height: 24px;
      width: 24px;
    }
  }

  .closeIcon path {
    stroke: var(--red1);
  }

  .checkIcon path {
    stroke: var(--success1);
  }
`

class Input extends Component {

  static propTypes = {
    onChange : PropTypes.func,
    onKeyDown: PropTypes.func,
    sendLot  : PropTypes.func,
  }

  state = {
    value  : this.props.value || '',
    error  : this.props.error,
    success: this.props.success,
    info   : this.props.info,
    type   : this.props.type,
    warning: this.props.warning
  }

  val() {
    return this.state.value
  }

  handleOnChange(e) {
    this.setState({ value: e.target.value }, () => {
      this.props.onChange !== undefined && this.props.onChange(this.state.value)
    })
  }

  handleOnKeyDown(e) {
    this.props.onKeyDown !== undefined && this.props.onKeyDown(e.key)
  }

  setType(type) {
    this.setState({ type })
  }

  changePasswordType() {
    this.setState(prev => ({ type: prev.type === 'password' ? 'text' : 'password' }))
  }

  setError(error) {
    this.setState({ error })
  }

  setSuccess(success) {
    this.setState({ success })
  }

  setInfo(info) {
    this.setState({ info })
  }

  setWarning(warning) {
    this.setState({ warning })
  }

  render() {
    const {
      className,
      prepend,
      append,
      compact,
      label,
      icon,
      required,
      comfirm,
      textarea,
      padding,
      height,
      ...inputProps
    } = this.props
    const { error, success, info, value, type, warning } = this.state

    // const i = append?.type?.target === (<button/>).type && 'button'

    return (
      <StyledInput
        compact={compact}
        padding={padding}
        prepend={prepend}
        append={append}
        className={className}
        error={error}
        success={success}
        modify={value.length}
        icon={icon}
        height={height}
      >
        {/* {textarea?
          <textarea value={this.state.value} onChange={(e)=>this.setState({value: e.target.value})}></textarea>:
          <input placeholder='' value={this.state.value} onChange={(e)=>this.setState({value: e.target.value})}></input>
        }
        <span>{placeholder || 'Placeholder'}</span> */}
        {!inputProps.placeholder && (
          <Text
            as="label"
            color="subtitle3"
          >{label}{required && '*'}</Text>
        )}
        <Flex style={{ position: 'relative' }}>
          {prepend && <div className="add prepend">{prepend}</div>}
          {textarea ?
            <textarea
              {...inputProps}
              type={type}
              required={required}
              value={this.state.value}
              onChange={(e) => this.handleOnChange(e)}
              onKeyDown={(e) => this.handleOnKeyDown(e)}
            /> :
            <input
              {...inputProps}
              type={type}
              required={required}
              value={this.state.value}
              onChange={(e) => this.handleOnChange(e)}
              onKeyDown={(e) => this.handleOnKeyDown(e)}
              style={{ marginRight: this.props.button && '20px' }}
            />
          }
          {inputProps.type === 'password' && (
            <button
              type="button"
              className="password-btn"
              onClick={this.changePasswordType.bind(this)}
            ><EyeIcon style={{ opacity: type === 'password' ? '.5' : '1' }}/>
            </button>
          )}
          {append && <div className={cx('add append', this.props.button && 'button')}>{append}</div>}
          {icon && (
            <div className="icon">
              {value && !success && !error && <ArrOfferIcon onClick={this.props.sendLot} style={{ cursor: 'pointer' }}/>}
              {error && <CloseIcon className="closeIcon"/>}
              {success && <CheckIcon onClick={() => {
                this.setState({ value: '', success: undefined })
              }} className="checkIcon"/>}
              {!(error || success || value) ? icon : null}
            </div>
          )}
        </Flex>
        <Text
          size="12px"
          color={(error && 'red1') || (success && 'success1') || (info && 'light') || (warning && 'warning')}
          margin="4px 0 0 0"
        >
          {error || success || info || warning || null}
        </Text>

      </StyledInput>
    )
  }
}

export default Input
