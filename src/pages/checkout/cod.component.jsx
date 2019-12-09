import React from 'react';

import './cod.styles.scss';

class CashOnDelivery extends React.Component {
    constructor() {
        super();

    }

    handlePick() {
        alert('transaction sucessfull plz pay the concerned amount and take the meat')
    }

    render() {
        return(
            <div>
              <button
               className = 'cod'
               onClick = {this.handlePick}
              >CASH ON DELIVERY</button>
            </div>
        );
    }
}

export default  CashOnDelivery;