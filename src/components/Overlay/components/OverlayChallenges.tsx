import React from 'react';
import { OverlayComponentProps } from './../../../types/overlay.d';

const OverlayChallenges = React.memo(function OverlayChallenges({
  item,
}: OverlayComponentProps) {
  return (
    <div className='detailContainer'>
      <p style={{ textAlign: 'justify', paddingBottom: '10px' }}>
        <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
          - 프로젝트 중 직면한 문제와 해결책
        </span>
      </p>
      {item?.challenges?.map((challenge, index) => (
        <div key={index} className='detail__section'>
          <p>* {challenge.title}</p>
          {challenge.descriptions.map((description, idx) => (
            <div key={idx} style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <div style={{ margin: '10px 0' }}>
                <p style={{ fontSize: '1.1rem' }}>- Problem</p>
                <p>{description.ProblemSituation}</p>
              </div>
              <div style={{ margin: '10px 0' }}>
                <p style={{ fontSize: '1.1rem' }}>- Solution</p>
                <ul>
                  {description.ProblemSolution.map((step, stepIdx) => (
                    <p key={stepIdx}>
                      {stepIdx + 1}. {step}
                    </p>
                  ))}
                </ul>
              </div>

              <div style={{ margin: '10px 0' }}>
                <p style={{ fontSize: '1.1rem' }}>- Result</p>
                <p>{description.ProblemResult}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
});

export default OverlayChallenges;
