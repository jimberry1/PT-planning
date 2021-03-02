import { AnimatePresence, motion } from 'framer-motion';
import { FadeUpAndInWithExitUp } from '../styles/animations';
import { PageContainerStyles } from '../styles/genericStyles';
import { FadeUpAndInTitleText } from '../styles/animatedStyles';
export interface LandingPageProps {}

const LandingPage: React.SFC<LandingPageProps> = () => {
  return (
    <PageContainerStyles>
      <motion.div
        variants={FadeUpAndInWithExitUp}
        initial="hidden"
        animate="visible"
        transition={{
          when: 'beforeChildren',
          delay: 0.5,
          staggerChildren: 0.5,
        }}
      >
        <FadeUpAndInTitleText
          variants={FadeUpAndInWithExitUp}
          key="plsCahngeME"
          transition={{
            type: 'tween',
            ease: 'easeInOut',
          }}
        >
          Good morning Jim
        </FadeUpAndInTitleText>
        <FadeUpAndInTitleText
          variants={FadeUpAndInWithExitUp}
          key="TitleOhhMyGodChangeMe2"
          transition={{
            type: 'tween',
            ease: 'easeInOut',
          }}
        >
          <div style={{ fontSize: '0.8em' }}>here are this week's workouts</div>
        </FadeUpAndInTitleText>
      </motion.div>
    </PageContainerStyles>
  );
};

export default LandingPage;
