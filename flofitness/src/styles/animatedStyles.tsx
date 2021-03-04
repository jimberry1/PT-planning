import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FadeUpAndInTitleText = styled(motion.div)`
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  margin-top: 15px;
  text-align: center;
`;

export const CentrallyAlignedMotionContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
