import { useState, useEffect } from 'react';
import { PageContainerStyles } from '../../styles/genericStyles';
import { useLocation } from 'react-router';
import AddOrEditWorkoutContainer from '../../containers/PtControlContainers/AddOrEditWorkoutContainer';
export interface AddOrEditWorkoutPageProps {}

/**
 * This page is the personal trainer display for information on an individual workout and the exercises it contains
 */
const AddOrEditWorkoutPage: React.SFC<AddOrEditWorkoutPageProps> = () => {
  const location = useLocation();
  const [workoutId, setWorkoutId] = useState('');
  const [workoutProgrammeId, setWorkoutProgrammeId] = useState('');
  const [workoutNumber, setWorkoutNumber] = useState(0);

  useEffect(() => {
    const queryString = require('query-string');
    const parsed = queryString.parse(location.search);
    setWorkoutId(parsed.workoutId);
    setWorkoutProgrammeId(parsed.workoutProgrammeId);
    if (parsed.workoutNumber) {
      setWorkoutNumber(parsed.workoutNumber);
    }
  }, [location]);
  return (
    <PageContainerStyles>
      <AddOrEditWorkoutContainer
        workoutId={workoutId}
        workoutProgrammeId={workoutProgrammeId}
        workoutNumberIfAdding={workoutNumber}
      />
    </PageContainerStyles>
  );
};

export default AddOrEditWorkoutPage;
