import { FadeUpAndInWithExitUp } from '../styles/animations';
import { PageContainerStyles } from '../styles/genericStyles';
import { FadeUpAndInTitleText } from '../styles/animatedStyles';
import WeekWorkouts from '../containers/WeekWorkouts';
import { connect } from 'react-redux';
export interface LandingPageProps {
  forename: string;
}

const LandingPage: React.SFC<LandingPageProps> = ({ forename }) => {
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
      <WeekWorkouts />
    </PageContainerStyles>
  );
};

const mapStateToProps = (state: any) => ({
  forename: state.user.forename,
});
export default connect(mapStateToProps)(LandingPage);
