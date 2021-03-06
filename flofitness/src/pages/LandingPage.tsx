import { FadeUpAndInWithExitUp } from '../styles/animations';
import { PageContainerStyles } from '../styles/genericStyles';
import { FadeUpAndInTitleText } from '../styles/animatedStyles';
import WeekWorkouts from '../containers/WeekWorkouts';
export interface LandingPageProps {}

const LandingPage: React.SFC<LandingPageProps> = () => {
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
        Good morning Jim
      </FadeUpAndInTitleText>
      <WeekWorkouts />
    </PageContainerStyles>
  );
};

export default LandingPage;
