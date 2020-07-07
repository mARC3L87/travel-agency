//external
import React from 'react';
import PropTypes from 'prop-types';
//css
import styles from './OrderOption';
//js
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';


const OrderOptionIcons = ({values, required, setOptionValue}) => (
  <div
    className={styles.component}
  >
    {required ? '' : (
      <div 
        onChange={() => setOptionValue('')}>
        <Icon icon={'times-circle'} />none</div>
    )}
    {values.map(value => (
      <div
        className={styles.icon} 
        key={value.id} 
        onClick={event => setOptionValue(event.currentTarget.value.id)}>
        <Icon name={value.icon}/>
        {value.name}
        ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
  
};

export default OrderOptionIcons;