import { useEffect, useState } from "react";
import { FaJava } from "react-icons/fa";
import { BaseCard } from "./BaseCard";
import { Progress, Tooltip } from 'antd';
import styled from "@emotion/styled";
import { useTranslation } from 'react-i18next';
import { ImgLinkLabel } from "../../types/commonTypes";

const FlexContainer = styled.div`
  width: 80%;
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: colummn;
  gap: 10px;
  justify-content: space-around;
`;

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

interface ImportantSkill extends ImgLinkLabel {
  percent: number;
  strokeColor: string;
  width?: string;
}

export const SkillsCard = () => {
  const { t } = useTranslation();
  const rawImportantSkills = t('skillsCard.h.importantSkills', { returnObjects: true }) as ImportantSkill[];
  const rawOtherSkills = t('skillsCard.h.otherSkills', { returnObjects: true }) as ImgLinkLabel[];
  const [importantSkills, setImportantSkills] = useState<ImportantSkill[]>([]);
  const [otherSkills, setOtherSkills] = useState<ImgLinkLabel[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const isImages = await Promise.all(
        rawImportantSkills.map(async (img) => {
          return { ...img, link: (await import(`@assets/${img.link}.png`)).default };
        })
      );
      setImportantSkills(isImages);

      const osImages = await Promise.all(
        rawOtherSkills.map(async (img) => {
          return { ...img, link: (await import(`@assets/${img.link}.png`)).default };
        })
      );
      setOtherSkills(osImages);
    };

    loadImages();
  }, [rawImportantSkills, rawOtherSkills]);

  return (
    <BaseCard
      icon={<FaJava color="red" />}
      title={t('skillsCard.title')}
      actionText={t('skillsCard.actionText')}
      hoverContent={
        <>
          <FlexContainer>
            {importantSkills.map((skill, index) => (
              <Tooltip key={index} title={skill.label}>
                <Progress
                  percent={skill.percent}
                  strokeColor={skill.strokeColor}
                  type="circle"
                  format={() => <img src={skill.link} alt={skill.label} style={{ width: skill.width ?? '36px' }} />}
                  size={100}
                />
              </Tooltip>
            ))}

          </FlexContainer>
          <OtherSkills>
            {otherSkills.map((skill, index) => (
              <Tooltip key={index} title={skill.label}>
                <img src={skill.link} alt={skill.label} />
              </Tooltip>
            ))}
          </OtherSkills>
        </>
      }
    />
  )
};
