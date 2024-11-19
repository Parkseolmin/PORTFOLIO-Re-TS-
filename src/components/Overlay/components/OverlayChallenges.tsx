import React from 'react';
import { OverlayComponentProps } from './../../../types/overlay.d';

const OverlayChallenges = React.memo(function OverlayChallenges({
  item,
}: OverlayComponentProps) {
  return (
    <div className='detailContainer'>
      <p style={{ textAlign: 'justify', paddingBottom: '10px' }}>
        <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
          - Project Problem
        </span>
      </p>
      {item?.challenges?.map((challenge, index) => (
        <div key={index} className='detail__section'>
          <p>* {challenge.title}</p>
          {challenge.descriptions.map((description, idx) => (
            <div key={idx} style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <p>- 문제</p>
              <p>{description.ProblemSituation}</p>

              <p>- 해결 단계</p>
              <ul>
                {description.ProblemSolution.map((step, stepIdx) => (
                  <p key={stepIdx}>
                    {stepIdx + 1}. {step}
                  </p>
                ))}
              </ul>

              <p>- 결과</p>
              <p>{description.ProblemResult}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
});

export default OverlayChallenges;
