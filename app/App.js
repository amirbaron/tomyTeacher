import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {TomyTeacher} from './components/TomyTeacher';
import * as CounterActions from './actions/counter';

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TomyTeacher);
