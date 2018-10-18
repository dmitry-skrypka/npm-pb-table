import React from 'react';
import styled from "styled-components";


const Input = styled.input`
border: none transparent;
outline: none;
font-size: 13px;
	padding: 6px 0 4px 10px;
	border-bottom: 1px solid #cecece;
	background: ${props => (props.BgColor ? props.BgColor : 'white')};
	
`;


export default class DrawInput extends React.Component {
  handleInputEvent = event => {
    this.props.handleCellDataChangeEvent(event);
  };
  render() {

    const { id, name, type, value, BgColor } = this.props;

    return (
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={this.handleInputEvent}
        // readOnly={name === 'id'? "readonly" : null }
        disabled={name === 'id'? "readonly" : null }
		BgColor={BgColor}

      />
    );
  }
}
