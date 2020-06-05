import { connect } from 'react-redux';
import { RootState } from '../../store';
import Home, { StateProps, DispatchProps } from './Home';
import getBillList from '../../selectors/getBillList';
import {push} from 'connected-react-router';

const mapStateToProps = (state: RootState): StateProps => {
    return {
        bills: getBillList(state),
    };
};

const mapDispathToProps = {
    gotoAddBill: () => push('/detail')
};

export default connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispathToProps
)(Home);
