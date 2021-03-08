import { useState, useEffect } from 'react';
import WorkoutOverview from '../../components/workoutOverview';
import WorkoutProgrammeManagementDisplay from '../../components/workoutProgramme/WorkoutProgrammeManagementDisplay';
import {
  fetchAllWorkoutsForWorkoutProgrammeId,
  fetchWorkoutProgrammeInformationById,
} from '../../config/firebaseQueries';
import { CentrallyAlignedMotionContainer } from '../../styles/animatedStyles';
import { FadeUpAndInWithExitUp } from '../../styles/animations';
import {
  GeneralFullWidthColumnContainer,
  PageContainerStyles,
} from '../../styles/genericStyles';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router';
import { ADD_OR_EDIT_WORKOUT } from '../../config/pageRoutes';

export interface ManageWorkoutInformationProps {
  workoutProgrammeId: string;
}

const ButtonContainer = styled(motion.div)``;
const ManageWorkoutInformation: React.SFC<ManageWorkoutInformationProps> = ({
  workoutProgrammeId,
}) => {
  const history = useHistory();
  const [workoutProgrammeOverview, setWorkoutProgrammeOverview] = useState({
    clientId: '',
    clientName: '',
    start: null,
    status: '',
    paid: false,
    paused: false,
    personalTrainerId: '',
  });
  const [
    workoutsForWorkoutProgramme,
    setWorkoutsForWorkoutProgramme,
  ] = useState([]);

  useEffect(() => {
    const fetchWorkoutProgrammeData = async () => {
      await fetchWorkoutProgrammeInformationById(workoutProgrammeId)
        .get()
        .then((workoutProgramme: any) => {
          if (workoutProgramme.exists) {
            setWorkoutProgrammeOverview(workoutProgramme.data());
          }
        });
    };

    if (workoutProgrammeId) {
      fetchWorkoutProgrammeData();
    }
  }, [workoutProgrammeId]);

  useEffect(() => {
    const fetchWorkoutProgrammeData = async () => {
      await fetchAllWorkoutsForWorkoutProgrammeId(workoutProgrammeId)
        .get()
        .then((workouts: any) => {
          setWorkoutsForWorkoutProgramme(
            workouts.docs.map((workout: any) => ({
              id: workout.id,
              data: workout.data(),
            }))
          );
        });
    };

    if (workoutProgrammeId) {
      fetchWorkoutProgrammeData();
    }
  }, [workoutProgrammeId]);

  const workoutClickedHandler = (workoutId: string) => {
    history.push(
      `${ADD_OR_EDIT_WORKOUT}?workoutId=${workoutId}&workoutProgrammeId=${workoutProgrammeId}`
    );
  };

  const addWorkoutClickedHandler = () => {
    history.push(
      `${ADD_OR_EDIT_WORKOUT}?workoutProgrammeId=${workoutProgrammeId}&workoutNumber=${
        workoutsForWorkoutProgramme.length + 1
      }`
    );
  };

  return (
    <PageContainerStyles>
      <WorkoutProgrammeManagementDisplay
        workoutProgramme={workoutProgrammeOverview}
      />
      <GeneralFullWidthColumnContainer>
        {workoutsForWorkoutProgramme &&
          workoutsForWorkoutProgramme.map((workout: any, index: number) => {
            return (
              <CentrallyAlignedMotionContainer
                variants={FadeUpAndInWithExitUp}
                transition={{ delay: 0.2 + 0.3 * index }}
                initial="hidden"
                animate="visible"
                key={workout.id}
              >
                <WorkoutOverview
                  clicked={() => workoutClickedHandler(workout.id)}
                  workout={workout.data}
                />
              </CentrallyAlignedMotionContainer>
            );
          })}
      </GeneralFullWidthColumnContainer>
      <ButtonContainer
        variants={{ interact: { y: -10, scale: 1.1 } }}
        whileHover="interact"
        whileTap="interact"
        onClick={addWorkoutClickedHandler}
      >
        <AiOutlinePlusCircle size={50} />
      </ButtonContainer>
    </PageContainerStyles>
  );
};

export default ManageWorkoutInformation;
