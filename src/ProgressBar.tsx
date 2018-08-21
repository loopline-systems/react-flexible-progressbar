import React from 'react';

interface Props {
  width?: number | string;
  height?: number | string;
  margin?: number | string;
  progress?: number;
  progressTxt?: string;
  showPercentage?: boolean;
}

const ProgressBar = ({
  width,
  height = 10,
  margin,
  progress = 0,
  progressTxt = 'Progress:',
  showPercentage,
}: Props) => (
  <div className="react-flexible-progressbar" style={{ width, margin }}>
    <div className="rf-progressbar" style={{ height }}>
      <div style={{ width: `${progress}%` }} />
    </div>
    {showPercentage && (
      <div className="rf-progress-txt">{progressTxt} {`${progress}%`}</div>
    )}
  </div>
);

export default ProgressBar;
