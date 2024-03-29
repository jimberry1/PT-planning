import styled from 'styled-components';

export const PageContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
`;

export const GeneralFullWidthColumnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GeneralCentrallyAlignedFlexRowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GeneralCentrallyAlignedFlexboxColumnDirection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const GeneralPageTitle = styled.div``;

export const GeneralPageSubTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  font-size: 30px;

  @media (max-width: 1000px) {
  }
`;

export const GeneralPageTextBody = styled.span`
  padding: 5px;
`;

export const GeneralButtonTest = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  background: linear-gradient(90deg, #ff8008 0%, #ffc837 100%);
  border: 5px solid #222;
  border-radius: 50px;
  margin: auto;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    background: linear-gradient(90deg, #ff8008 0%, #c17b16 100%);
  }
`;

export const GeneralInputStyle = styled.input`
  padding: 5px;
  border-radius: 5px;
  font-size: 20px;
`;
