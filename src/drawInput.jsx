import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
border-style: solid;
    border-width: 0 0 1px 0;
    border-color: white;
	background: ${props => (props.BgColor ? props.BgColor : 'white')};
	width: ${props => props.idWidth}
	outline: none;
	text-align: ${props => props.idAlign};
	
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
        disabled={name === "id" ? "readonly" : null}
        BgColor={name === "id" ? "#AFCDE7" : BgColor}
        idWidth={name === "id" ? "60px" : "unset"}
		idAlign={name === "id" ? "center" : "left"}
      />
    );
  }
}
