import { FaJava } from "react-icons/fa";
import { BaseCard } from "./BaseCard";
import { SiTypescript } from "react-icons/si";
import { Flex, Progress, Tooltip } from 'antd';
import styled from "@emotion/styled";

import react from '@assets/react.png'
import docker from '@assets/docker.png'
import htmlcss from '@assets/htmlcss.png'
import cicd from '@assets/cicd.png'
import springboot from '@assets/springboot.png'

const OtherSkills = styled.div`
  display: flex;
  flex-direction: colummn;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  gap: 10px;
  justify-content: space-around;

  img {
    object-fit: contain;
    width: 50px;
  }
`;

export const SkillsCard = () => (
  <BaseCard
    icon={<FaJava color="red" />}
    title="Compétences"
    actionText="Voir plus"
    hoverContent={
      <>
        <Flex gap='middle' style={{marginTop: '15px'}}>
          <Tooltip title='Java'>
            <Progress percent={85} strokeColor={'#eb2d2f'} type="circle" format={() => <FaJava size={35} color="#eb2d2f" />} size={100} />
          </Tooltip>
          <Tooltip title='TypeScript'>
            <Progress percent={80} strokeColor={'#2596be'} type="circle" format={() => <SiTypescript size={35} color='#2596be' />} size={100} />
          </Tooltip>
        </Flex>
        <Tooltip title='CI/CD'>
          <Progress percent={75} strokeColor={'#fcb028'} type="circle" format={() => <img src={cicd} alt="React" style={{ width: '73px' }} />} size={100} />
        </Tooltip>
        <OtherSkills>
          <Tooltip title='Spring Boot'>
            <img src={springboot} alt="Spring Boot" />
          </Tooltip>
          <Tooltip title='React'>
            <img src={react} alt="React" />
          </Tooltip>
          <Tooltip title='Docker'>
            <img src={docker} alt="Docker" />
          </Tooltip>
          <Tooltip title='HTML & CSS'>
            <img src={htmlcss} alt="PHP" style={{ width: '80px' }} />
          </Tooltip>
        </OtherSkills>
      </>
    }
  />
);
