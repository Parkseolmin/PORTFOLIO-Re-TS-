import React from 'react';
import { OverlayHeaderProps } from '../../../types/overlay';

const OverlayHeader = React.memo(function OverlayHeader({
  item,
  onClose,
}: OverlayHeaderProps) {
  return (
    <div className='overlay-header'>
      <div className='overlay-header__project--info'>
        <p>{item?.projectName}</p>
        <p>Key Technologies</p>
        <p>{item?.projectTech}</p>
      </div>
      <div className='overlay-header__project--info'>
        <p id='close-btn' onClick={onClose}>
          Close
        </p>
      </div>
    </div>
  );
});

export default OverlayHeader;
