//external
import { connect } from 'react-redux';
//js
import OrderForm from './OrderForm';
//data
import { getOrderOptions } from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

export default connect(mapStateToProps)(OrderForm);