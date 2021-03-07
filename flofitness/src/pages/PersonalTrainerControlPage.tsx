import { useState } from 'react';
import { connect } from 'react-redux';
import { PageContainerStyles } from '../styles/genericStyles';
import styled from 'styled-components';
import ManageExerciseInformation from '../containers/PtControlContainers/ManageExerciseInformation';
import LoadAndDisplayClientList from '../containers/PtControlContainers/LoadAndDisplayClientList';

export interface PersonalTrainerControlPageProps {
  userId: string;
}

const PersonalTrainerControlPage: React.SFC<PersonalTrainerControlPageProps> = ({
  userId,
}) => {
  return (
    <PageContainerStyles>
      <ManageExerciseInformation userId={userId} />
      <LoadAndDisplayClientList userId={userId} />
    </PageContainerStyles>
  );
};

const mapStateToProps = (state: any) => ({
  userId: state.user.uid,
});

export default connect(mapStateToProps)(PersonalTrainerControlPage);
