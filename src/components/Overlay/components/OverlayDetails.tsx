import React from 'react';
import { OverlayComponentProps } from './../../../types/overlay.d';

const OverlayDetails = React.memo(function OverlayDetails({
  item,
}: OverlayComponentProps) {
  return (
    <section className='overlay-videoSection__detail'>
      <h3 style={{ marginBottom: '1rem' }}>* 주요 작업 및 성과</h3>
      {item?.tasksAndAchievements?.map((task, index) => (
        <article
          key={task.title}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '30px 25px 20px',
            marginBottom: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* 제목 */}
          <header style={{ marginBottom: '10px' }}>
            <h4 style={{ fontWeight: 'bold', color: '#333' }}>
              {index + 1}. {task.title}
            </h4>
          </header>

          {/* 설명 */}
          <section style={{ marginBottom: '15px' }}>
            <p style={{ lineHeight: '2', color: '#666' }}>{task.description}</p>
          </section>

          {/* 성과 */}
          <section>
            <h4 style={{ color: '#555', marginBottom: '10px' }}>성과</h4>
            <ul style={{ color: '#444', lineHeight: '2' }}>
              {task.IndicatorImg && (
                <img
                  src={task.IndicatorImg}
                  alt={`Detailed Indicator Analysis for ${task.IndicatorImg}`}
                  style={{ maxWidth: '650px', padding: '20px 5px' }}
                />
              )}
              {task.achievements.map((achievement) => (
                <li key={achievement} style={{ marginBottom: '5px' }}>
                  - {achievement}
                </li>
              ))}
            </ul>
          </section>
        </article>
      ))}
    </section>
  );
});

export default OverlayDetails;
