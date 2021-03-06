import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import {
  GeneralCentrallyAlignedFlexboxColumnDirection,
  GeneralPageSubTitle,
} from '../../styles/genericStyles';
import Background from '../../assets/Background.svg';
export interface PageLoaderProps {}

const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  background: url(${Background});
  left: 0;
  content: '';
  opacity: 1;
  display: flex;
  justify-content: center;
`;

const PageLoader: React.SFC<PageLoaderProps> = () => {
  return (
    <Backdrop>
      <GeneralCentrallyAlignedFlexboxColumnDirection
        style={{ position: 'relative', gap: 50 }}
      >
        <GeneralPageSubTitle style={{ color: 'black' }}>
          Just a minute...
        </GeneralPageSubTitle>
        <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
      </GeneralCentrallyAlignedFlexboxColumnDirection>
    </Backdrop>
  );
};

export default PageLoader;
