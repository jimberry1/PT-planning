import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import ManageWorkoutInformation from '../containers/PtControlContainers/ManageWorkoutInformation';
import { PageContainerStyles } from '../styles/genericStyles';

export interface ManageWorkoutProgrammePageProps {}

const ManageWorkoutProgrammePage: React.SFC<ManageWorkoutProgrammePageProps> = () => {
  const location = useLocation();
  const [workoutProgrammeId, setWorkoutProgrammeId] = useState('');

  useEffect(() => {
    const queryString = require('query-string');
    const parsed = queryString.parse(location.search);
    setWorkoutProgrammeId(parsed.workoutProgrammeId);
  }, [location]);

  return (
    <PageContainerStyles>
      <ManageWorkoutInformation workoutProgrammeId={workoutProgrammeId} />
    </PageContainerStyles>
  );
};

export default ManageWorkoutProgrammePage;
