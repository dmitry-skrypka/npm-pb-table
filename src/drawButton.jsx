import React from 'react';
import styled from 'styled-components';
export default class DrawButton extends React.Component {
  render() {

    const SaveButton = styled.button`
   
      
    
  display: inline-block;
  font-size: 100%;
  font-weight: 700;
  color: #fff;
  text-shadow: #053852 -1px 1px, #053852 1px 1px, #053852 1px -1px, #053852 -1px -1px;
  text-decoration: none;
  user-select: none;
  padding: 5px;
  
  background: #053852 repeating-linear-gradient(135deg, #053852, #053852 10px, #1679ad 10px, #1679ad 20px, #053852 20px);
  cursor: pointer;
  
    `;

    const { onClick, value } = this.props;

      return <SaveButton onClick={onClick} >{value}</SaveButton>;
  }
}
