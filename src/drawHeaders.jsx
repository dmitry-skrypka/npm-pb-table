//Headers
import {DefaultHeaders} from "./config";
import React from "react";
import styled from 'styled-components';


const Header = styled.th`
text-transform: uppercase;
`

;

export default class DrawHeaders extends React.Component {

	render() {
		const Headers = this.props.headers ? this.props.headers : DefaultHeaders;
		const headersList = Headers.map((name, index) => <Header key={index}>{name}</Header>);
		return (headersList)
	}





}
