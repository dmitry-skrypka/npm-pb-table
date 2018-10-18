import React, { Component, Fragment } from 'react';

import DrawButton from './drawButton';
import DrawHeaders from './drawHeaders';
import DrawRow from './drawRow';
import { generateId, getItemTemplate } from './helpers';
import {  DefaultData } from './config';
import styled from 'styled-components';

const TableWrapper = styled.div`
    background: ${props => (props.BgColor ? 'white' : 'white')};
   
    text-align: -webkit-center;
    padding: 20px;
    `;

const TableStyled = styled.table`
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
  text-align: left;
  border-collapse: separate;
  border-spacing: 5px;
  background: ${props => (props.BgColor ? props.BgColor : 'white')};
  color: #656665;
  
`;
const Warning = styled.div`
  color: red;
  flex-direction: column;
  width: 30%;
`;

const TableHead = styled.thead`
  
  text-align: center;
`;

class ItemsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.data = this.props.data;
    this.state.touched = this.props.touched;
  }

  handleAddRowEvent = () => {
    if (!this.state.touched && this.props.addRowEvent) {
      this.props.addRowEvent();
    } else if (!this.state.touched) {
      let newData = this.state.data;
      const newItem = getItemTemplate(this.state.data),
        newId = generateId(),
        newRow = {
          ...newItem,
          id: newId,
        };
      this.state.data.push(newRow);

      this.setState({ data: newData });
    } else console.log('need save');
  };

  handleRowDelEvent(item) {
    if (!this.state.touched && this.props.delEvent) {
      this.props.delEvent(item);
    } else if (!this.state.touched) {
      const index = this.state.data.indexOf(item);

      this.state.data.splice(index, 1);

      this.setState({ data: this.state.data });
    } else console.log('need save');
  }
  handleCellDataChangeEvent = event => {
    let item = {
      id: parseInt(event.target.id),
      name: event.target.name,
      value: event.target.value,
    };
    let items = this.state.data.slice();

    items.forEach(i => {
      for (let key in i) {
        if (key === item.name && i.id === item.id) {
          i[key] = item.value;
        }
      }
    });

    this.setState({ edited: items });

    if (!this.state.touched) {
      this.setState({ touched: true });
    }
  };
  handleSave = () => {
    this.setState({ data: this.state.edited });
    this.setState({ touched: false });
    if (this.props.saveEvent) {
      this.props.saveEvent(this.state.edited);
    }
  };
  render() {
    const tableData = this.state.data ? this.state.data : DefaultData;
    const touched = this.state.touched;
    const BgColor = this.props.BgColor;

    return (
      <Fragment>
        <TableWrapper BgColor={BgColor}>
          <TableStyled BgColor={BgColor}>
            <TableHead>
              <tr>
                <DrawHeaders headers={this.props.headers} />
              </tr>
            </TableHead>

            <tbody>
              {tableData.map((item, index) => (
                <DrawRow
                  row={item}
                  key={index}
                  handleRowDelEvent={this.handleRowDelEvent.bind(this)}
                  handleCellDataChangeEvent={this.handleCellDataChangeEvent.bind(
                    this,
                  )}
                  BgColor={BgColor}
                />
              ))}
            </tbody>
          </TableStyled>

          <DrawButton
            onClick={this.handleAddRowEvent.bind(this)}
            value="ADD ROW"
          />
          <Warning
            style={{
              display: touched ? 'flex' : 'none',
            }}
          >
            Unsaved data in cells. Please save progress before adding/removing
            rows!
            <DrawButton onClick={this.handleSave} value="SAVE" />
          </Warning>
        </TableWrapper>
      </Fragment>
    );
  }
}

export default ItemsTable;
