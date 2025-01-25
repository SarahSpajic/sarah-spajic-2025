import { motion } from 'framer-motion';
import styled from 'styled-components';

const PageWrapper = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
`;

const pageVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    }
  }
};

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageWrapper
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </PageWrapper>
  );
}; 