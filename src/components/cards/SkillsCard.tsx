import { FaJava } from "react-icons/fa";
import { BaseCard } from "./BaseCard";
import { SiTypescript } from "react-icons/si";
import { Flex, Progress, Tooltip } from 'antd';
import styled from "@emotion/styled";

export const OtherSkills = styled.div`
  display: flex;
  flex-direction: colummn;
  width: 100%;
  margin-top: 15px;
  background-color: grey;
  gap: 10px;
  justify-content: space-around;
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
            <Progress percent={80} strokeColor={'#eb2d2f'} type="circle" format={() => <FaJava size={40} color="#eb2d2f" />} size={122} />
          </Tooltip>
          <Tooltip title='TypeScript'>
            <Progress percent={70} strokeColor={'#2596be'} type="circle" format={() => <SiTypescript size={40} color='#2596be' />} size={122} />
          </Tooltip>
        </Flex>
        <Tooltip title='CI/CD'>
          <Progress percent={63} strokeColor={'#fcb028'} type="circle" format={() => <img src="cicd.png" alt="React" style={{ width: '80px' }} />} size={122} />
        </Tooltip>
        <OtherSkills>
          <img src="react.svg" alt="React" style={{ width: '35px' }} />
          <img src="springboot.png" alt="Spring Boot" style={{ width: '35px' }} />
        </OtherSkills>
      </>
    }
  />
);
// TODO php, html css, Docker