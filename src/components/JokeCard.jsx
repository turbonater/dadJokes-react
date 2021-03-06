import React from "react";
import styled from "styled-components";
import { theme, useTheme } from "../hooks/use-theme";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  min-height: 200px;
  padding: 2.5em;
  background: ${({ theme }) => theme.card};
  border-radius: 15px;
  transition: ease all 100ms;
  margin-top: 5em;
  p {
    font-size: 24px;
    line-height: 40px;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
  @media (max-width: 768px) {
    width: 350px;
    padding: 2em;
  }
`;

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const JokeCard = ({ joke }) => {
  const { data, isLoading, error } = joke;
  const theme = useTheme();
  return (
    <Card theme={theme}>
      {isLoading && <ClipLoader color={theme.text} />}
      {data && (
        <motion.p
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={data.id}
        >
          {data.joke}
        </motion.p>
      )}
    </Card>
  );
};

export default JokeCard;
