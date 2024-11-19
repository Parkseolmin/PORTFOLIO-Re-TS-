import React from 'react';
import { OverlayComponentProps } from './../../../types/overlay.d';

const OverlayDetails = React.memo(function OverlayDetails({
  item,
}: OverlayComponentProps) {
  return (
    <div className='overlay-videoSection__detail'>
      <p>
        <span>- Project Function</span>
      </p>
      {item?.projectDetails?.map((detail, index) => (
        <div key={index} className='detail__section'>
          <p>* {detail.title}</p>
          {detail.descriptions.map((description, index) => (
            <p key={index} style={{ paddingLeft: '15px' }}>
              - {description}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
});

export default OverlayDetails;
