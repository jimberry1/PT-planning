import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi';
export interface CheckedCircleProps {
  checked: boolean;
}

const CheckedCircle: React.SFC<CheckedCircleProps> = ({ checked }) => {
  return <>{checked ? <BiRadioCircleMarked /> : <BiRadioCircle />}</>;
};

export default CheckedCircle;
