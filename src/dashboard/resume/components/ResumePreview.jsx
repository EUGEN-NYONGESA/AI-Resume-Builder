import React, { useContext } from 'react'
import { ResumeInfoContext } from '../../../context/ResumeInfoContext'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummeryPreview from './preview/SummeryPreview';
import ExpreriencePreview from './preview/ExperiencePreview';
import EducationPreview from './preview/EducationPreview';
import SkillReview from './preview/SkillReview';
import LanguagePreview from './preview/LanguagePreview';
import CertificatePreview from './preview/CertificatePreview';
import SocialsPreview from './preview/SocialsPreview';
import RefereesPreview from './preview/RefereesPreview';


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
        <LanguagePreview resumeInfo={resumeInfo} />
        {/* Certifications */}
        <CertificatePreview resumeInfo={resumeInfo} />
        {/* Social Profiles */}
        <SocialsPreview resumeInfo={resumeInfo} />
        {/* Referees */}
        <RefereesPreview resumeInfo={resumeInfo} />
    </div>
  );
}

export default ResumePreview;
