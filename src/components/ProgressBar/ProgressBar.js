/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      aria-label="progress"
      role="progressbar"
      aria-valuenow={value}
      style={SIZES[size]}
    >
      <BarWrapper>
        <Progress value={value} />
      </BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

const SIZES = {
  large: {
    "--height": "24px",
    "--padding": "4px",
    "--radius": "8px",
  },
  medium: {
    "--height": "12px",
    "--radius": "4px",
  },
  small: {
    "--height": "8px",
    "--radius": "4px",
  },
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: var(--height);
  background-color: ${COLORS.primary};
  width: ${(p) => p.value}%;
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
