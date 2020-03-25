import { connect } from 'react-redux';

import Medication from '../../presentations/Medication/Medication';

import screens from '../../navigation';
import { medicationActions } from '../../core/flux/store/medication/actions';
import { getMedicationList } from '../../core/flux/selectors/medication';

const mapStateToProps = (state) => ({
  medicationList: getMedicationList(state),
});

const mapDispatchToProps = (dispatch, { navigation }) => ({
  updateMedicationItem: (item) => dispatch(medicationActions.updateDrug(item)),
  pushToMedicationDetails: (medicationItem) => (
    navigation.navigate(screens.medicationDetails, { medicationItem })
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Medication);
