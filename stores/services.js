import { AiOutlineMobile, AiOutlineTeam } from 'react-icons/ai'
import { BiBuildingHouse } from 'react-icons/bi'
import { MdOutlineCampaign, MdWebAsset } from 'react-icons/md'
import { SiBmcsoftware } from 'react-icons/si'

export const SERVICES = [
  {
    icon: <MdWebAsset className="icon" />,
    title: '웹 어플리케이션 개발',
    content:
      '소규모 솔루션과 대규모 솔루션 구분없이 웹 어플리케이션 개발 가능',
  },
  {
    icon: <AiOutlineMobile className="icon" />,
    title: '모바일 어플리케이션 개발',
    content:
      'IOS와 안드로이드 기반의 모바일 앱 개발 가능',
  },
  {
    icon: <SiBmcsoftware className="icon" />,
    title: '고객 소프트웨어 개발',
    content:
      " 고객의 요구, 예산, 일정을 준수하는 최고 수준의 소프트웨어 개발 가능 경쟁력 있는 가격으로 신뢰할 수 있는 소프트웨어 개발 제공",
  },
  {
    icon: <AiOutlineTeam className="icon" />,
    title: '발주기업  전담 개발자 조직 운영',
    content:
      '소프트웨어 개발 단계인 설계, 개발, 테스트 전 과정에 기업 전담 팀 운영',
  },
  {
    icon: <MdOutlineCampaign className="icon" />,
    title: '소프트웨어 개발자 지원 및 교육 서비스',
    content:
      '신뢰성 있고, 해외 경험이 있는 전문가에 의한 예자일,  스크럼,  프레임 워크 개발 방법에 대한 교육 및 지원',
  },
  {
    icon: <BiBuildingHouse className="icon" />,
    title: '스타트업 인큐베이터',
    content:
      '인큐베이터, 공동 작업 공간 등 개발자 생태계로 개발자 공급 Pool 운영',
  },
]
