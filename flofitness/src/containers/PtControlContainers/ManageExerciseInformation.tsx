import { useState } from 'react';
import {
  GeneralButtonTest,
  PageContainerStyles,
} from '../../styles/genericStyles';
import AddExerciseInformation from './AddExerciseInformation';

export interface ManageExerciseInformationProps {
  userId: string;
}

const ManageExerciseInformation: React.SFC<ManageExerciseInformationProps> = ({
  userId,
}) => {
  const [showAddExerciseInfo, setShowAddExerciseInfo] = useState(false);

  return (
    <PageContainerStyles>
      <div style={{ width: '80%', marginTop: 10 }}>
        <GeneralButtonTest
          onClick={() => setShowAddExerciseInfo((curVal) => !curVal)}
        >
          {showAddExerciseInfo
            ? 'Hide exercise information'
            : 'Add Exercise information'}
        </GeneralButtonTest>
      </div>
      {showAddExerciseInfo && <AddExerciseInformation userId={userId} />}
    </PageContainerStyles>
  );
};

export default ManageExerciseInformation;
