import React from 'react'

function ExpreriencePreview({resumeInfo}) {
  return (
    <div className='my-6 mt-1'>
      <h2
        className="text-center text-xs font-normal mt-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Professional Experience
      </h2>
      <hr style={{
          borderColor: resumeInfo?.themeColor,
        }} 
      />

        {resumeInfo?.experience.map((experience, index)=> (
          <div className='mt-1' key={index}>
            <h2 className='text-sm font-bold'
            style={{
                color:resumeInfo?.themeColor
            }}
            >{experience?.title}</h2>
            <h2 className='text-xs flex justify-between'>{experience?.title}
            {experience.city},
            {experience.county}
            <span>{experience?.startDate} {experience?.currentlyWorking?'Present':experience?.endDate}</span>
            </h2>
            <p className='text-xs my-2'>
              {experience?.workSummary}
            </p>
          </div>
        ))}
    </div>
  )
}

export default ExpreriencePreview