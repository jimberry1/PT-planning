import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GeneralInputStyle } from '../../styles/genericStyles';
import { exerciseType } from '../../types';
import CheckedCircle from '../../UI/checkedCircle';
export interface EditableExerciseProps {
  exercise: exerciseType;
  valueChanged: (newValue: any, target: string) => void;
}

const EditableExercise: React.SFC<EditableExerciseProps> = ({
  exercise,
  valueChanged,
}) => {
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
    flex-wrap: wrap;
  `;

  const StyledExerciseSectionContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;
  return (
    <StyledExerciseOverviewContainer>
      <StyledExerciseSectionContainer>
        Exercise number:
        <GeneralInputStyle
          value={exercise.index}
          type="number"
          onChange={(e) => valueChanged(e.target.valueAsNumber, 'index')}
        />
      </StyledExerciseSectionContainer>
      <StyledExerciseSectionContainer>
        Title:
        <GeneralInputStyle
          value={exercise.title}
          onChange={(e) => valueChanged(e.target.value, 'title')}
        />
      </StyledExerciseSectionContainer>
      <StyledExerciseSectionContainer>
        Sets:
        <GeneralInputStyle
          type="number"
          value={exercise.sets}
          onChange={(e) => valueChanged(e.target.valueAsNumber, 'sets')}
        />
      </StyledExerciseSectionContainer>
      <StyledExerciseSectionContainer>
        Reps:
        <GeneralInputStyle
          value={exercise.sets}
          onChange={(e) => valueChanged(e.target.valueAsNumber, 'reps')}
        />
      </StyledExerciseSectionContainer>
      <StyledExerciseSectionContainer>
        Weight:
        <GeneralInputStyle
          value={exercise.sets}
          onChange={(e) => valueChanged(e.target.valueAsNumber, 'weight')}
        />
      </StyledExerciseSectionContainer>
      <StyledExerciseSectionContainer
        style={{ minWidth: 200 }}
        onClick={() => valueChanged(null, 'isWarmup')}
      >
        Warm up
        <CheckedCircle checked={exercise.isWarmup} />
      </StyledExerciseSectionContainer>
      <StyledExerciseSectionContainer
        onClick={() => valueChanged(null, 'isCooldown')}
        style={{ minWidth: 200 }}
      >
        Cool down
        <CheckedCircle checked={exercise.isCooldown} />
      </StyledExerciseSectionContainer>
    </StyledExerciseOverviewContainer>
  );
};

export default EditableExercise;

/**
 * I want to make this component more bland than what the client sees
 *
 * Input fields for: title, exercise order number, sets, reps, weight
 *
 * Have boolean controls for: isWarmup, isCooldown, isSuperSet, sameReps, sameWeight
 */

// title: string;
// index: number;
// exerciseOverviewId: string;
// equipment: equipemntType[];
// isWarmup: boolean;
// isCooldown: boolean;
// isSuperSet: boolean;
// sets: number;
// reps: number[];
// weight: number[];
