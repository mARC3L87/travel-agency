//external
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
//js
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
//data
import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings';
//utils
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

const sendOrder = (options, tripCost, tripName, tripId, tripCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  const {contact, name} = options;

  if ( name === '' || name.length < 5 ) {
    alert('Please fill name with 5 or more letters');
    return;
  }
  if ( contact === '' || contact.length < 5 ) {
    alert('Please fill contact with 5 or more letters');
    return;
  }
  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    tripCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};


const OrderForm = ({ tripCost, options, setOrderOption, tripName, tripId, tripCode }) => (
  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption
          currentValue={options[option.id]} 
          setOrderOption={setOrderOption} 
          {...option}/>
      </Col>))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
      <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, tripCode)}>Order now!</Button>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  tripCode: PropTypes.string,
};

export default OrderForm;