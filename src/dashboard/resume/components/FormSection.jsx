import React, { useState } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import { Button } from "../../../components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import Summary from "./forms/Summary";
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import Skills from "./forms/Skills";
import Languages from "./forms/Languages";
import Certifications from "./forms/Certifications";
import SocialProfiles from "./forms/SocialProfiles";
import Referee from "./forms/Referee";

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <Button variant="outline" size="sm" className="flex gap-2">
          <LayoutGrid />
          Theme
        </Button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            disabled={!enableNext}
            className="flex gap-2"
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          >
            Next
            <ArrowRight />
          </Button>
        </div>
      </div>
      {/* Personal Details */}
      {activeFormIndex == 1 ? (
        <PersonalDetail enabledNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 2 ? (
        <Summary enabledNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex == 3 ? (
        <Experience />
      ) : activeFormIndex == 4 ? (
        <Education />
      )  : activeFormIndex == 5 ? (
        <Skills />
      ) : activeFormIndex == 6 ? (
        <Languages />
      )
      : activeFormIndex == 7 ? (
        <Certifications />
      )
      : activeFormIndex == 8 ? (
        <SocialProfiles />
      )
      : activeFormIndex == 9 ? (
        <Referee />
      )
      : null}

      {/* Experience */}
      {/* Educational Detail */}
      {/* Skills */}
      {/* Languages */}
      {/* Certifications */}
      {/* socialProfiles */}
      {/* Referees */}
    </div>
  );
}

export default FormSection;
