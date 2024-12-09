// import { skillsIcons } from '../assets/data/about';
import { skills } from '../assets/data/skills';
import GifGalleryDev from './GifGalleryDev';
import GifGalleryGoals from './GifGalleryGoals';
export default function About() {
  return (
    <div className='about'>
      <div className='about-container'>
        <div>
          <h1>소개 및 가치관</h1>
          <p>
            React를 기반으로 직관적이고 효율적인 UI 개발을 추구하는 신입
            프론트엔드 개발자 <span>박설민</span>입니다. 저는 팀원들과 협력하며
            문제를 해결해 나가는 과정에서 새로운 관점을 배우고 성장하는 것을
            중요하게 여깁니다. 교내 팀 프로젝트를 통해 협업과 소통의 중요성을
            깊이 깨달았으며, 이러한 경험을 실무에서도 적극적으로 발휘하고자
            합니다.
          </p>
          <br />
          <p>
            제가 가장 중요하게 생각하는 가치는 <span>"태도가 경쟁력이다"</span>
            라는 신념입니다. 기술은 꾸준히 배우고 익힐 수 있지만, 올바른 태도와
            성장하려는 열정이야말로 더 나은 결과를 만들어낸다고 믿습니다. 저는
            팀과 함께 도전하며, 서로에게 긍정적인 영향을 줄 수 있는 개발자가
            되기 위해 끊임없이 노력하겠습니다.
          </p>
        </div>
        <div>
          <h1>기술 스택</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              justifyContent: 'center',
            }}
          >
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  textAlign: 'start',
                  marginBottom: '15px',
                }}
              >
                <h2 style={{ color: '#1919197d', marginBottom: '10px' }}>
                  {category
                    .replace(/([A-Z])/g, ' $1') // 카멜 케이스를 공백으로 분리
                    .replace(/^./, (str) => str.toUpperCase())}{' '}
                </h2>
                <p
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                  }}
                >
                  - {items.join(' | ')}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1>개발 철학 및 학습 방법</h1>
          <GifGalleryDev />
          <p>
            문제 상황에 직면했을 때, 저는 다양한 시도를 통해 해결책을 모색하며
            문제의 본질을 파악하려 노력합니다. 마치 탑을 쌓아 올리듯, 기초부터
            차근차근 접근하며 큰 그림을 그려 나가는 방식을 선호합니다. 이를 통해
            효율적이고 구체적인 해결 방안을 도출하고 있습니다.
          </p>
          <br />
          <p>
            주니어 개발자로서 모든 단계를 완벽하게 계획하는 데에는 미숙한 부분이
            있지만, 이를 보완하기 위해 지속적으로 학습하며 시도와 수정, 개선을
            반복하고 있습니다. 이 과정을 통해 점차 더 나은 방향으로 성장하고
            있으며, 효율적인 개발 방법을 꾸준히 탐구 중입니다.
          </p>
        </div>
        <div>
          <h1>미래 목표</h1>
          <GifGalleryGoals />
          <p>
            저는 앞으로 React와 Next.js를 기반으로 한 풀스택 개발 역량을
            강화하며, 더욱 전문적인 프론트엔드 개발자가 되겠습니다. 이를 통해
            팀의 목표 달성에 실질적으로 기여하는 개발자가 되고 싶습니다.
            <br />
            <br />
            특히 학교 팀 프로젝트에서 얻은 리더십과 커뮤니케이션 스킬을
            바탕으로, 팀원 각자의 강점을 극대화하며 모두가 화합하고 효율적으로
            협력할 수 있는 환경을 만드는 것이 제 목표입니다. 팀과 함께 도전하고,
            함께 성취하며 성장하는 개발자가 되겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
