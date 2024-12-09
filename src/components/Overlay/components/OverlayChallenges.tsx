import React from 'react';
import { OverlayComponentProps } from './../../../types/overlay.d';

const OverlayChallenges = React.memo(function OverlayChallenges({
  item,
}: OverlayComponentProps) {
  return (
    <div style={{ margin: '0 auto' }}>
      {/* Challenges Section */}
      <section style={{ marginBottom: '40px' }}>
        <h3
          style={{
            marginBottom: '20px',
          }}
        >
          * 도전 과제 및 해결
        </h3>
        {item?.challenges?.map((challenge, index) => (
          <article
            key={index}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '30px 25px 20px',
              marginBottom: '20px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h4
              style={{
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '15px',
                lineHeight: '2',
              }}
            >
              {challenge.title}
            </h4>
            {challenge.descriptions.map((desc, idx) => (
              <div key={idx} style={{ marginTop: '15px' }}>
                <p
                  style={{
                    fontWeight: 'bold',
                    color: '#555',
                    marginBottom: '10px',
                  }}
                >
                  문제 상황:
                </p>
                <p style={{ lineHeight: '2', color: '#666' }}>
                  {desc.ProblemSituation}
                </p>

                <p
                  style={{
                    fontWeight: 'bold',
                    color: '#555',
                    margin: '15px 0 10px',
                  }}
                >
                  해결 방안:
                </p>
                <ul
                  style={{
                    lineHeight: '2',
                    color: '#444',
                  }}
                >
                  {desc.ProblemSolution.map((solution, solIndex) => (
                    <li key={solIndex} style={{ marginBottom: '5px' }}>
                      {solution}
                    </li>
                  ))}
                </ul>

                <p
                  style={{
                    fontWeight: 'bold',
                    color: '#555',
                    margin: '15px 0 10px',
                  }}
                >
                  결과:
                </p>
                {desc.ProblemResultImg && (
                  <img
                    src={desc.ProblemResultImg}
                    alt={`Problem result visualiztion for ${desc.ProblemSituation}`}
                    style={{ maxWidth: '650px', padding: '30px 5px' }}
                  />
                )}
                <p style={{ lineHeight: '2', color: '#555' }}>
                  {desc.ProblemResult}
                </p>
              </div>
            ))}
          </article>
        ))}
      </section>

      {/* Lessons Learned Section */}
      <section>
        <h3
          style={{
            marginBottom: '20px',
          }}
        >
          * 배운 점
        </h3>
        <ul style={{ lineHeight: '2', color: '#444', textAlign: 'justify' }}>
          {item?.lessonsLearned?.map((lesson, index) => (
            <li
              key={index}
              style={{
                marginBottom: '10px',
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: '5px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
});

export default OverlayChallenges;
