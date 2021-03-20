import { PageContainerStyles } from '../styles/genericStyles';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ExerciseInformation from '../containers/ExerciseInformation';
export interface ExerciseInformationPageProps {}

/**
 * This page displays a deep dive on the selected exercise. It is reached either from searching from an exercise or clicking on an exercise in an exercise programme.
 */
const ExerciseInformationPage: React.SFC<ExerciseInformationPageProps> = () => {
  const location = useLocation();
  const [exerciseId, setExerciseId] = useState('');

  useEffect(() => {
    const queryString = require('query-string');
    const parsed = queryString.parse(location.search);
    setExerciseId(parsed.exerciseId);
  }, [location]);
  return (
    <PageContainerStyles>
      <ExerciseInformation exerciseId={exerciseId} />
    </PageContainerStyles>
  );
};

export default ExerciseInformationPage;
