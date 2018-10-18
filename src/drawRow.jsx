import React, {Fragment} from "react";
import DrawCell from "./drawCell";
import DrawButton from "./drawButton";


export default class DrawRow extends React.Component {
	handleRowDelEvent = () => {
		this.props.handleRowDelEvent(this.props.row);

	};

	handleDataChange = event => {
		this.props.handleCellDataChangeEvent(event);
	};
	render() {
		const row = this.props.row;
		const BgColor = this.props.BgColor

		return (
			<Fragment>
				<tr>
					{Object.getOwnPropertyNames(row).map((key, index) => (
						<DrawCell
							id={row.id}
							name={key}
							value={row[key]}
							key={index}
							handleCellDataChangeEvent={this.handleDataChange}
							BgColor={BgColor}
						/>
					))}
					<td>
						<DrawButton onClick={this.handleRowDelEvent} value="X" />
					</td>
				</tr>
			</Fragment>
		);
	}
}
