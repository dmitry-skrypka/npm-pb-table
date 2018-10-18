import React from 'react';
import ItemsTable from './App';
import { Data } from './config';
import { generateId, getItemTemplate } from './helpers';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.data = Data;
    this.state.touched = false;
    this.handleAddEvent = this.handleAddEvent.bind(this);
  }

  handleAddEvent = () => {
    let newItem, newId, newRow;
    let newData = this.state.data;
    // if (!this.state.touched) {
      const ServerAddCall = ms => {
        return new Promise(resolve => {
          setTimeout(() => {
            newItem = getItemTemplate(Data);
            newId = generateId();
            newRow = {
              ...newItem,
              id: newId,
            };
            newData.push(newRow);
            resolve('200');
          }, ms);
        });
      };

      const response = ServerAddCall(1000);
      response.then(() => {
        // this.state.data.push(newRow);
        // this.setState(this.state.data);


        console.log(newData);
        this.setState({ data: newData });
      });
    // } else {
    //   console.log('need save');
    // }
  };

  handleRowDelEvent = item => {
    const index = this.state.data.indexOf(item);
    let newData = this.state.data.splice();
    console.log(newData, index);
    // if (!this.state.touched) {
      const ServerDelCall = ms => {
        return new Promise(resolve => {
          setTimeout(() => {
            newData = newData.splice(index, 1);
			  console.log(newData, index);
            resolve('200');
          }, ms);
        });
      };

      const response = ServerDelCall(1000);
      response.then(() => {
        this.state.data.splice(index, 1);
        this.setState(newData);
        // this.setState(newData);
      });
    // } else {
    //   console.log('need save');
    // }
  };
  handleCellChangeEvent = (touched) => {
  	// this.setState({touched: touched})
  }

  handleSaveEvent = dataToSave => {
    const ServerSaveCall = ms => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('200');
        }, ms);
      });
    };

    const response = ServerSaveCall(1000);
    response
      .then(() => {
        this.setState({ data: dataToSave });
      })
      .then(() => {
        this.setState({ touched: true });
      });
  };

  render() {
    const TableData = this.state.data;
    const touched = this.state.touched;
    console.log(this.state);
    return (
      <ItemsTable
        data={TableData}
        // addRowEvent={this.handleAddEvent}
        // delEvent={this.handleRowDelEvent}
        // saveEvent={this.handleSaveEvent}
		// cellChangeEvent={this.handleCellChangeEvent}
        touched={touched}
		BgColor={"#a9b1a9"}
      />
    );
  }
}
