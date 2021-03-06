import { useState, useEffect } from 'react';
import { PageContainerStyles } from '../styles/genericStyles';
import db, { storage } from '../firebase';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

export interface ExerciseInformationProps {
  exerciseId: string;
}

const TitleContainerStyles = styled.div`
  width: 80%;
  border-bottom: 1px solid white;
  text-align: center;
  font-size: 2em;
  margin: 30px 0px;
`;

const ExerciseDescriptionContainer = styled.div`
  width: 75%;
  text-align: left;
  font-size: 15px;
  letter-spacing: 2px;
  //   align-self: flex-start;
  //   margin-left: 10px;
`;
const ExerciseInformation: React.SFC<ExerciseInformationProps> = ({
  exerciseId,
}) => {
  const [exerciseInformation, setExerciseInformation]: any = useState();
  const [exerciseVideoUrl, setExerciseVideoUrl] = useState('');
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const getExerciseInformationFromFirebase = async () => {
      await db
        .collection('exerciseOverview')
        .doc(exerciseId)
        .get()
        .then((exerciseSnapshot: any) => {
          if (exerciseSnapshot.exists) {
            setExerciseInformation(exerciseSnapshot.data());
          } else {
            console.log('Exercise could not be found');
          }
        });
    };
    if (exerciseId) {
      getExerciseInformationFromFirebase();
    }
  }, [exerciseId]);

  useEffect(() => {
    if (exerciseId) {
      storage
        .ref(`/exerciseVideos/${exerciseId}.mp4`)
        .getDownloadURL()
        .then((url) => {
          setExerciseVideoUrl(url);
        });
    }
  }, [exerciseId]);

  console.log(exerciseVideoUrl);

  return (
    <PageContainerStyles>
      <TitleContainerStyles>{exerciseInformation?.name}</TitleContainerStyles>
      <ExerciseDescriptionContainer>
        {exerciseInformation?.description}
      </ExerciseDescriptionContainer>
      {exerciseVideoUrl && (
        <div style={{ marginTop: 50 }}>
          <ReactPlayer
            url={exerciseVideoUrl}
            onClick={() => setPlayVideo((curVal) => !curVal)}
            playing={playVideo}
            loop={true}
          />
        </div>
      )}
    </PageContainerStyles>
  );
};

export default ExerciseInformation;
