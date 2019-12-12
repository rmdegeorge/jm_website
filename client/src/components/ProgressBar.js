import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #000000;
`;
const CurrentProgress = styled.div`
  width: ${props => props.percent};
  height: 10px;
  background-color: #000000;
  border-radius: 5px;

`;

export default function ProgressBar({percentage}) {
  return (
    <ProgressBarContainer>
      <CurrentProgress percent={percentage}></CurrentProgress>
    </ProgressBarContainer>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired
}
