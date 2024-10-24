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
            프론트엔드 개발자를 희망하는 <span>박설민</span> 입니다. 저는
            팀원들과 소통하며 더 나은 해결책을 찾아가는 과정을 즐깁니다. 함께
            문제를 해결하는 성취감이 저를 성장시킵니다. 교내에서 장기간
            팀프로젝트 경험을 통해 팀원들과의 협력과 소통의 중요성을 몸소 느낄
            수 있었습니다.
          </p>
          <br />
          <p>
            이러한 경험을 통해, 단순한 기술 습득 이상의 것이 중요하다는 걸
            깨달았습니다. <span>"태도가 경쟁력이다."</span> 라는 말을 중요하게
            생각하는 이유도 바로 여기에 있습니다. 팀과의 협업에서 중요한 것은
            뛰어난 기술뿐만 아니라, 꾸준히 성장하려는 열정과 팀을 위해 헌신하는
            태도가 결국 더 나은 결과를 만들어낸다고 믿습니다.
          </p>
        </div>
        <div>
          <h1>기술 스택</h1>
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
            문제 상황에 맞닥뜨리면, 저는 먼저 스스로 다양한 시도를 통해 해결책을
            모색합니다. 마치 탑을 쌓듯 작은 벽돌부터 차근차근 쌓아가며 문제의 큰
            틀을 파악하고, 필요에 따라 참고 자료를 활용하여 해결 방향을 구체화해
            나갑니다.
          </p>
          <br />
          <p>
            주니어 개발자로서 모든 단계를 세밀하게 계획하는 데는 아직 미숙한
            점이 있지만, 시도와 수정, 그리고 개선을 반복하면서 최선의 해결책을
            찾아가고 있습니다. 이러한 과정에서 쌓인 경험을 바탕으로 점점 더
            효율적인 해결 방법을 개발해 나가고 있습니다.
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
