import { FadeUpAndInWithExitUp } from '../styles/animations';
import { PageContainerStyles } from '../styles/genericStyles';
import { FadeUpAndInTitleText } from '../styles/animatedStyles';
import WeekWorkouts from '../containers/WeekWorkouts';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchWorkoutProgrammeInformationById } from '../config/firebaseQueries';
export interface LandingPageProps {
  forename: string;
  userId: string;
  workoutProgrammeId: string;
}

const LandingPage: React.SFC<LandingPageProps> = ({
  forename,
  userId,
  workoutProgrammeId,
}) => {
  const [workoutProgrammeInfo, setWorkoutProgrammeInfo]: any = useState(null);
  useEffect(() => {
    fetchWorkoutProgrammeInformationById(workoutProgrammeId)
      .get()
      .then((workoutProgrammeInfoSnapshot) => {
        if (workoutProgrammeInfoSnapshot.exists) {
          setWorkoutProgrammeInfo(workoutProgrammeInfoSnapshot.data());
        }
      });
  }, []);
  return (
    <PageContainerStyles>
      <FadeUpAndInTitleText
        variants={FadeUpAndInWithExitUp}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 0.5,
        }}
      >
        Good morning {forename}
      </FadeUpAndInTitleText>
      {workoutProgrammeInfo && (
        <WeekWorkouts
          userId={userId}
          workoutProgrammeId={workoutProgrammeId}
          week={workoutProgrammeInfo.week}
        />
      )}
    </PageContainerStyles>
  );
};

const mapStateToProps = (state: any) => ({
  forename: state.user.forename,
  userId: state.user.uid,
  workoutProgrammeId: state.user.workoutProgrammeId,
});
export default connect(mapStateToProps)(LandingPage);
