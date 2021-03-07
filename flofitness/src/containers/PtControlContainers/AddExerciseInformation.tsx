import { useState } from 'react';
import { PageContainerStyles } from '../../styles/genericStyles';
import styled from 'styled-components';
import db from '../../firebase';
import { EXERCISE_OVERVIEW } from '../../config/firebaseCollectionEndpoints';
import { GeneralButtonTest } from '../../styles/genericStyles';
export interface AddExerciseInformationProps {
  userId: string;
}

export const StyledInput = styled.input`
  padding: 10px;
`;

export const StyledTextArea = styled.textarea`
  padding: 15px;
  text-align: center;
  font-size: 20px;
  outline: none;
  margin-bottom: 5px;
  width: 80%;
`;

const AddExerciseInformation: React.SFC<AddExerciseInformationProps> = ({
  userId,
}) => {
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseDescription, setExerciseDescription] = useState('');
  const [informationMessage, setInformationMessage] = useState('');

  const exerciseSubmissionHandler = () => {
    if (exerciseName && exerciseDescription) {
      db.collection(EXERCISE_OVERVIEW)
        .add({
          name: exerciseName,
          description: exerciseDescription,
          addedBy: userId,
        })
        .then(() => {
          setExerciseDescription('');
          setExerciseName('');
          setInformationMessage('Thank you for submitting a new exercise');
        });
    } else {
      setInformationMessage('Please fill out both the name and description');
    }
  };

  return (
    <PageContainerStyles>
      <div style={{ marginTop: 10, textAlign: 'center' }}>
        {informationMessage}
      </div>
      <StyledInput
        placeholder="Enter exercise name..."
        onChange={(e) => {
          if (informationMessage) {
            setInformationMessage('');
          }
          setExerciseName(e.target.value);
        }}
        value={exerciseName}
        style={{ marginBottom: 10, marginTop: 30 }}
      />
      <StyledTextArea
        placeholder="Enter exercise description..."
        onChange={(e) => {
          if (informationMessage) {
            setInformationMessage('');
          }
          setExerciseDescription(e.target.value);
        }}
        value={exerciseDescription}
      />
      <GeneralButtonTest onClick={exerciseSubmissionHandler}>
        Submit exercise
      </GeneralButtonTest>
    </PageContainerStyles>
  );
};

export default AddExerciseInformation;
