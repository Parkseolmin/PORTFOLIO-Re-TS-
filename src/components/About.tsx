import { skillsIcons } from '../assets/data/about';
import GifGalleryDev from './GifGalleryDev';
import GifGalleryGoals from './GifGalleryGoals';
export default function About() {
  return (
    <div className='about'>
      <div className='about-container'>
        <div>
          <h1>소개 및 가치관</h1>
          <p>
            안녕하세요, 프론트엔드 개발자{' '}
            <span
              style={{
                color: '#3b3b3b',
                fontSize: '1.4rem',
                fontWeight: 'bolder',
              }}
            >
              박설민
            </span>
            입니다. 저는 팀원들과 소통하며 더 나은 해결책을 찾아가는 과정을
            즐깁니다. 함께 문제를 해결하는 성취감이 저를 성장시킵니다.
          </p>
          <br />
          <p>
            그래서 저는{' '}
            <span
              style={{
                color: '#3b3b3b',
                fontSize: '1.4rem',
                fontWeight: 'bolder',
              }}
            >
              "태도가 경쟁력이다."
            </span>{' '}
            라는 말을 중요하게 생각합니다. 기술은 누구나 배울 수 있지만, 성장에
            대한 열정과 팀을 위한 태도는 저를 더 나은 개발자로 만드는
            원동력이라고 믿습니다.
          </p>
        </div>
        <div>
          <h1>경험과 기술</h1>
          <div className='about-skills'>
            {skillsIcons.map((skill, index) => (
              <div key={index}>
                <div dangerouslySetInnerHTML={{ __html: skill.svg }} />
                <h4>{skill.iconName}</h4>
              </div>
            ))}
          </div>
          <br />
        </div>
        <div>
          <h1>개발 철학 및 학습 방법</h1>
          <GifGalleryDev />
          <p>
            새로운 문제에 맞닥뜨리면, 저는 완벽한 코드를 작성하기보다는 마치
            탑을 쌓듯이 작은 벽돌을 하나씩 쌓아가며 대략적인 형태를 잡아봅니다.
            그 후 문제를 해결할 방향을 잡아가는 과정에서 필요한 자료를
            찾아보기도 하고, 다양한 리소스를 활용해 최대한 적용할 수 있는 부분을
            살펴봅니다.
          </p>
          <br />
          <p>
            물론 아직 주니어 개발자로서 모든 단계를 세밀하게 계획하는 데는
            미숙한 부분이 있지만, 탑을 쌓아가는 과정에서 점차 수정하고 개선해
            나가며 전체적인 구조를 완성하려고 노력합니다.
          </p>
        </div>
        <div>
          <h1>미래 목표</h1>
          <GifGalleryGoals />
          <p>
            저는 실력이 아직 부족하지만, 꾸준히 성장해 팀에 도움이 되는 사람이
            되고 싶습니다. 이를 위해 배우고, 새로운 기술에 도전하며, 팀 목표
            달성을 위해 노력할 것입니다.
            <br /> <br />
            또한, 학교에서의 장기간 팀 프로젝트를 통해 리더십과 역할 분담,
            원활한 커뮤니케이션의 중요성을 경험했습니다. 이러한 경험을 바탕으로,
            팀원들의 장단점을 잘 파악하며 모두가 즐겁게 협력해 안정적으로
            프로젝트를 완수할 수 있도록 기여하는 팀원이 되고 싶습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
