import { useState, useEffect } from 'react';

import {
  GeneralButtonTest,
  GeneralInputStyle,
  PageContainerStyles,
} from '../../styles/genericStyles';
import { exerciseType, workoutType } from '../../types';
import styled from 'styled-components';
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi';

const InputContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px, 
  margin-bottom: 10px;
`;

const InputTitleContainer = styled.div`
  padding: 5px;
  border-bottom: 1px solid white;
`;

export interface AddOrEditWorkoutFormProps {
  workout: workoutType;
  workoutId: string;
  onWorkoutValueChange: (event: any, target: string) => void;
  submitButtonClicked: () => void;
}

const AddOrEditWorkoutForm: React.SFC<AddOrEditWorkoutFormProps> = ({
  workout,
  workoutId,
  onWorkoutValueChange,
  submitButtonClicked,
}) => {
  return (
    <PageContainerStyles>
      <InputContainer>
        <InputTitleContainer>Workout Title</InputTitleContainer>
        <GeneralInputStyle
          style={{ textAlign: 'center' }}
          value={workout.title}
          onChange={(e) => onWorkoutValueChange(e, 'title')}
        />
      </InputContainer>

      <InputContainer>
        <InputTitleContainer>Workout week</InputTitleContainer>
        <GeneralInputStyle
          style={{ textAlign: 'center' }}
          value={workout.week}
          onChange={(e) => onWorkoutValueChange(e, 'week')}
        />
      </InputContainer>

      <InputContainer>
        <InputTitleContainer>Workout number</InputTitleContainer>
        <GeneralInputStyle
          style={{ textAlign: 'center' }}
          value={workout.workoutNumber}
          onChange={(e) => onWorkoutValueChange(e, 'workoutNumber')}
        />
      </InputContainer>
      <InputContainer
        onClick={() => onWorkoutValueChange(null, 'isSupervisedSession')}
      >
        <InputTitleContainer>is the session supervised?</InputTitleContainer>
        {workout.isSupervisedSession ? (
          <BiRadioCircleMarked />
        ) : (
          <BiRadioCircle />
        )}
      </InputContainer>
      <InputContainer onClick={() => onWorkoutValueChange(null, 'isComplete')}>
        <InputTitleContainer>session complete?</InputTitleContainer>
        {workout.isComplete ? <BiRadioCircleMarked /> : <BiRadioCircle />}
      </InputContainer>
      <GeneralButtonTest
        style={{ marginTop: 20 }}
        onClick={submitButtonClicked}
      >
        {workoutId ? 'Update workout' : 'Add workout'}
      </GeneralButtonTest>
    </PageContainerStyles>
  );
};

export default AddOrEditWorkoutForm;

// workoutProgrammeId: string;
// title: string;
// status?: string;
// isSupervisedSession: boolean;
// timestamp: any;
// workoutNumber: number;
// week: number;
// isComplete: boolean;
