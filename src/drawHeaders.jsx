//Headers
import {Headers} from "./config";
import React from "react";
import styled from 'styled-components';


const Header = styled.th`
border: 1px solid
`

const headersList = Headers.map((name, index) => <Header key={index}>{name}</Header>);

export default class DrawHeaders extends React.Component {
	render() {
		return headersList;
	}
}
