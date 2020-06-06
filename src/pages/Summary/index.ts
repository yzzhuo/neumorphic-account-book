import { connect } from 'react-redux';
import { RootState } from 'store';
import Summary, { StateProps, DispatchProps } from './Summary';
import getBillList from 'selectors/getBillList';

const mapStateToProps = (state: RootState): StateProps => {
    return {
        bills: getBillList(state),
    };
};

const mapDispathToProps = {
};

export default connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispathToProps
)(Summary);