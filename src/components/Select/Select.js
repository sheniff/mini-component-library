import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Text>{displayedValue}</Text>
      <Icon id="chevron-down" size={24} strokeWidth={2} />
      <SelectStyled id="selectthing" value={value} onChange={onChange}>
        {children}
      </SelectStyled>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border: none;
  padding: 12px 12px 12px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  float: left;
  position: relative;
  color: ${COLORS.gray700};

  &:focus {
    outline: 2px solid ${COLORS.primary};
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const Text = styled.div`
  margin-right: 20px;
  font: "Roboto" sans-serif;
`;

const SelectStyled = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

export default Select;
