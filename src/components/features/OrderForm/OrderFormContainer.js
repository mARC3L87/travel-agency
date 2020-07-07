//external
import { connect } from 'react-redux';
//js
import OrderForm from './OrderForm';
//data
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch =>({
  setOrderOption: order => dispatch(setOrderOption(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);