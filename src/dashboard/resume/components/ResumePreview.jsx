import React, { useContext } from 'react'
import { ResumeInfoContext } from '../../../context/ResumeInfoContext'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummeryPreview from './preview/SummeryPreview';
import ExpreriencePreview from './preview/ExperiencePreview';
import EducationPreview from './preview/EducationPreview';
import SkillReview from './preview/SkillReview';


function ResumePreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
        borderColor: resumeInfo?.themeColor
      }}
      >     
        {/* Personal Detail */}
        <PersonalDetailPreview resumeInfo={resumeInfo} />
        {/* Summary */}
        <SummeryPreview resumeInfo={resumeInfo} />
        {/* Professional Experience */}
        <ExpreriencePreview resumeInfo={resumeInfo} />
        {/* Education */}
        <EducationPreview resumeInfo={resumeInfo} />
        {/* Skills */}
        <SkillReview resumeInfo={resumeInfo} />
        {/* Languages */}

        {/* Certifications */}

        {/* Social Profiles */}
    </div>
  );
}

export default ResumePreview;
