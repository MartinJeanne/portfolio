import { FaJava } from "react-icons/fa";
import { BaseCard } from "./BaseCard";
import { SiTypescript } from "react-icons/si";
import { Flex, Progress, Tooltip } from 'antd';
import styled from "@emotion/styled";

export const OtherSkills = styled.div`
  display: flex;
  flex-direction: colummn;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  gap: 10px;
  justify-content: space-around;

  img {
    object-fit: contain;
    width: 55px;
  }
`;

export const SkillsCard = () => (
  <BaseCard
    icon={<FaJava color="red" />}
    title="Compétences"
    actionText="Voir plus"
    hoverContent={
      <>
        <Flex gap='middle'>
          <Tooltip title='Java'>
            <Progress percent={85} strokeColor={'#eb2d2f'} type="circle" format={() => <FaJava size={40} color="#eb2d2f" />} size={122} />
          </Tooltip>
          <Tooltip title='TypeScript'>
            <Progress percent={80} strokeColor={'#2596be'} type="circle" format={() => <SiTypescript size={40} color='#2596be' />} size={122} />
          </Tooltip>
        </Flex>
        <Tooltip title='CI/CD'>
          <Progress percent={75} strokeColor={'#fcb028'} type="circle" format={() => <img src="cicd.png" alt="React" style={{ width: '80px' }} />} size={122} />
        </Tooltip>
        <OtherSkills>
          <Tooltip title='Spring Boot'>
            <img src="springboot.png" alt="Spring Boot" />
          </Tooltip>
          <Tooltip title='React'>
            <img src="react.svg" alt="React" />
          </Tooltip>
          <Tooltip title='Docker'>
            <img src="docker.png" alt="Docker" />
          </Tooltip>
          <Tooltip title='HTML & CSS'>
            <img src="htmlcss.svg" alt="PHP" style={{ width: '80px' }} />
          </Tooltip>
        </OtherSkills>
      </>
    }
  />
);
