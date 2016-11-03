import { connect } from 'react-redux';
import { fetchLists } from '../../actions/list_actions';
import List from './list';


const mapStateToProps = ({ list }) => ({
  list: list.list,
  errors: list.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchLists: () => dispatch(fetchLists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);