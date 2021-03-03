import { AnimatePresence, motion } from 'framer-motion';
import { FadeUpAndInWithExitUp } from '../styles/animations';
import { PageContainerStyles } from '../styles/genericStyles';
import { FadeUpAndInTitleText } from '../styles/animatedStyles';
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
    </PageContainerStyles>
  );
};

export default LandingPage;
