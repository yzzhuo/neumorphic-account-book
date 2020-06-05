import { connect } from 'react-redux';
import { RootState } from '../../store';
import BillDetail, { StateProps, DispatchProps } from './BillDetail';
import { addBill } from '../../store/bills';
import {push} from 'connected-react-router';

const mapStateToProps = (state: RootState): StateProps => {
    return {
        categories: state.category.categories
    };
};

const mapDispathToProps = {
    addBill,
    gotoHomePage: () => push('/'),
};

export default connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispathToProps
)(BillDetail);
