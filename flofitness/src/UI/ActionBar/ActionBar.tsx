import styled from 'styled-components';
import { AiOutlineHome, AiOutlinePlus } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs';
import { RiAccountBoxLine } from 'react-icons/ri';
import { useState } from 'react';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
export interface ActionBarProps {}

const ActionBarContainer = styled.div`
  width: 100%;
  position: relative;
  height: 10%;
  background: #f0ede6;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ActionBarItemContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionBar: React.SFC<ActionBarProps> = () => {
  const history = useHistory();

  const handleActionBarItemClicked = (redirectPath: string) => {
    history.push(redirectPath);
  };

  return (
    <ActionBarContainer>
      <ActionBarItemContainer
        onClick={() => handleActionBarItemClicked('/account')}
      >
        <RiAccountBoxLine size={30} />
      </ActionBarItemContainer>
      <ActionBarItemContainer onClick={() => handleActionBarItemClicked('/')}>
        <AiOutlineHome size={30} />
      </ActionBarItemContainer>
      <ActionBarItemContainer
        onClick={() => handleActionBarItemClicked('/calendar')}
      >
        <BsCalendar size={30} />
      </ActionBarItemContainer>
      <ActionBarItemContainer
        onClick={() => handleActionBarItemClicked('/control')}
      >
        <AiOutlinePlus size={30} />
      </ActionBarItemContainer>
    </ActionBarContainer>
  );
};

export default ActionBar;
