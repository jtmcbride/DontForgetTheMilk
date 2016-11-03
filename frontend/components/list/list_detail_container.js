import { connect } from 'react-redux';
import {  } from '../../actions/list_actions';
import ListDetail from './list_detail';


const mapStateToProps = ({ list }) => ({
  list: list.list,
  errors: list.errors
});

const mapDispatchToProps = (dispatch) => ({
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDetail);