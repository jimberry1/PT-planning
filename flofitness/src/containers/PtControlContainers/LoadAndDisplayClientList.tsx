import { useState } from 'react';
import { useHistory } from 'react-router';
import {
  GeneralButtonTest,
  GeneralFullWidthColumnContainer,
  PageContainerStyles,
} from '../../styles/genericStyles';
import db from '../../firebase';
import { fetchWorkoutProgrammesByPersonalTrainerId } from '../../config/firebaseQueries';
import { workoutProgrammeType, workoutType } from '../../types';
import styled from 'styled-components';
export interface LoadAndDisplayClientListProps {
  userId: string;
}

const ClientNameContainer = styled.div`
  width: 50%;
  margin-top: 15px;
  background: #6b34eb;
  color: white;
  font-size: 25px;
  text-align: center;
  padding: 10px;
  border-radius: 15px;
`;

const LoadAndDisplayClientList: React.SFC<LoadAndDisplayClientListProps> = ({
  userId,
}) => {
  const [
    showManageClientWorkoutProgrammes,
    setShowManageClientWorkoutProgrammes,
  ] = useState(false);

  const history = useHistory();
  const [workoutProgrammes, setWorkoutProgrammes]: any = useState([]);

  const fetchClientWorkoutProgrammesHandler = () => {
    fetchWorkoutProgrammesByPersonalTrainerId(userId)
      .get()
      .then((workoutProgrammeSnapshot) => {
        setWorkoutProgrammes(
          workoutProgrammeSnapshot.docs.map((workout: any) => ({
            id: workout.id,
            data: workout.data(),
          }))
        );
      });
  };

  const workoutProgrammeSelectedHandler = (workoutProgrammeId: string) => {
    history.push(
      `/manageWorkoutProgramme?workoutProgrammeId=${workoutProgrammeId}`
    );
  };

  return (
    <PageContainerStyles>
      <div style={{ width: '80%', marginTop: 10 }}>
        <GeneralButtonTest
          onClick={() => {
            fetchClientWorkoutProgrammesHandler();
            setShowManageClientWorkoutProgrammes((curVal) => !curVal);
          }}
        >
          {showManageClientWorkoutProgrammes
            ? 'Hide client list'
            : 'Show client list'}
        </GeneralButtonTest>
      </div>
      <GeneralFullWidthColumnContainer>
        {showManageClientWorkoutProgrammes &&
          workoutProgrammes &&
          workoutProgrammes.map(
            (workoutProgramme: { id: string; data: workoutProgrammeType }) => {
              return (
                <ClientNameContainer
                  key={workoutProgramme.id}
                  onClick={() =>
                    workoutProgrammeSelectedHandler(workoutProgramme.id)
                  }
                >
                  {workoutProgramme.data.clientName}
                </ClientNameContainer>
              );
            }
          )}
      </GeneralFullWidthColumnContainer>
    </PageContainerStyles>
  );
};

export default LoadAndDisplayClientList;
