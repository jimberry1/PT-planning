import styled from 'styled-components';
import { GiBiceps, GiLeg, GiPush, GiPull } from 'react-icons/gi';
import { BiBody } from 'react-icons/bi';
import { TiTick } from 'react-icons/ti';
// import { IoCheckmarkDoneCircleOutline } from 'react-icons/io';
export interface WorkoutOverviewProps {
  title: string;
  isSupervisedSession: boolean;
  isComplete: boolean;
}

const StyledWorkoutOverviewContainer = styled.div`
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

const StyledWorkoutSectionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const WorkoutOverview: React.SFC<WorkoutOverviewProps> = ({
  title,
  isSupervisedSession,
  isComplete,
}) => {
  const determineWorkoutIcon = () => {
    if (title.toUpperCase().includes('LEG')) {
      return <GiLeg size="30" />;
    } else if (
      title.toUpperCase().includes('ARM') ||
      title.toUpperCase().includes('BICEP')
    ) {
      return <GiBiceps size="30" />;
    } else if (title.toUpperCase().includes('PUSH')) {
      return <GiPush size="30" />;
    } else if (title.toUpperCase().includes('PULL')) {
      return <GiPull size="30" />;
    } else if (title.toUpperCase().includes('BODY')) {
      return <BiBody size="30" />;
    }
  };

  return (
    <StyledWorkoutOverviewContainer
      style={{ background: isSupervisedSession ? 'brown' : '' }}
    >
      <StyledWorkoutSectionContainer>
        {determineWorkoutIcon()}
      </StyledWorkoutSectionContainer>
      <StyledWorkoutSectionContainer>{title}</StyledWorkoutSectionContainer>
      <StyledWorkoutSectionContainer>
        {isComplete ? (
          <TiTick size="25" />
        ) : (
          <div
            style={{
              background: 'white',
              borderRadius: '50%',
              height: 25,
              width: 25,
            }}
          />
        )}
      </StyledWorkoutSectionContainer>
    </StyledWorkoutOverviewContainer>
  );
};

export default WorkoutOverview;
