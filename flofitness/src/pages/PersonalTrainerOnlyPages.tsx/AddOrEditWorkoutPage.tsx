import { useState, useEffect } from 'react';
import { PageContainerStyles } from '../../styles/genericStyles';
import { useLocation } from 'react-router';
import AddOrEditWorkoutContainer from '../../containers/PtControlContainers/AddOrEditWorkoutContainer';
export interface AddOrEditWorkoutPageProps {}

const AddOrEditWorkoutPage: React.SFC<AddOrEditWorkoutPageProps> = () => {
  const location = useLocation();
  const [workoutId, setWorkoutId] = useState('');
  const [workoutProgrammeId, setWorkoutProgrammeId] = useState('');

  useEffect(() => {
    const queryString = require('query-string');
    const parsed = queryString.parse(location.search);
    setWorkoutId(parsed.workoutId);
    setWorkoutProgrammeId(parsed.workoutProgrammeId);
  }, [location]);
  return (
    <PageContainerStyles>
      <AddOrEditWorkoutContainer
        workoutId={workoutId}
        workoutProgrammeId={workoutProgrammeId}
      />
    </PageContainerStyles>
  );
};

export default AddOrEditWorkoutPage;
