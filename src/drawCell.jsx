import React from 'react';
import DrawInput from './drawInput';

export default class DrawCell extends React.Component {
  render() {



    const {handleCellDataChangeEvent, id, name, value, BgColor} = this.props;
    return (
      <td>
        <DrawInput
          type={'text'}
          id={id}
          name={name}
          value={value}
		  handleCellDataChangeEvent={handleCellDataChangeEvent}
		  BgColor={BgColor}
        />
      </td>
    );
  }
}
