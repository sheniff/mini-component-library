/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <Wrapper aria-label='progress' role='progressbar' aria-valuenow={value} style={SIZES[size]}><Progress value={value}/></Wrapper>;
};

const SIZES = {
  large: {
    '--height': '24px',
    '--radius': '8px',
    '--padding': '4px',
  },
  medium: {
    '--height': '12px',
    '--radius': '4px',
  },
  small: {
    '--height': '8px',
    '--radius': '4px',
  },
}

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  overflow: hidden;
  padding: var(--padding);
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: ${p => p.value}%;
  height: 100%;
  border-radius: 4px ${p => getEndRadius(p.value)}px ${p => getEndRadius(p.value)}px 4px;
`;

function getEndRadius(value) {
  return value === 100 ? 4 : value > 99.5 ? 2 : 0;
}

export default ProgressBar;
