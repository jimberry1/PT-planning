import styled from 'styled-components';
import { exerciseType } from '../../types';
import { motion } from 'framer-motion';
export interface ExerciseProps {
  exercise: exerciseType;
  exerciseClicked: (exerciseId: string) => void;
}

const StyledExerciseOverviewContainer = styled(motion.div)`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #191970;
  color: white;
  text-align: center;
  padding: 20px 5px;
  margin: 15px;
  border-radius: 15px;
`;

const StyledExerciseSectionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Exercise: React.SFC<ExerciseProps> = ({ exercise, exerciseClicked }) => {
  const determineExerciseContainerColor = () => {
    if (exercise.isWarmup) {
      return '#68d2fc';
    } else if (exercise.isCooldown) {
      return '#268aa3';
    } else return '';
  };

  return (
    <StyledExerciseOverviewContainer
      style={{ background: determineExerciseContainerColor() }}
      onClick={() => exerciseClicked(exercise.exerciseOverviewId)}
      variants={{ hover: { y: -10, background: '#588ea3' } }}
      whileHover="hover"
      whileTap="hover"
    >
      <StyledExerciseSectionContainer>
        {exercise.title}
      </StyledExerciseSectionContainer>
      <StyledExerciseSectionContainer>
        Sets: {exercise.sets}
      </StyledExerciseSectionContainer>
      <StyledExerciseSectionContainer>
        Reps:{' '}
        {exercise.reps.map((reps, index) => {
          if (index < exercise.reps.length - 1) {
            return `${reps}, `;
          } else return reps;
        })}
      </StyledExerciseSectionContainer>
      <StyledExerciseSectionContainer>
        Weights:{' '}
        {exercise.weight.map((weight, index) => {
          if (index < exercise.weight.length - 1) {
            return `${weight}, `;
          } else return weight;
        })}
      </StyledExerciseSectionContainer>
    </StyledExerciseOverviewContainer>
  );
};

export default Exercise;
