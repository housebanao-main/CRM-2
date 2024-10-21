import React from 'react';
import LeadSteps6 from '../components/LeadSteps6/LeadSteps6'; 
import Headerdescription from '../components/Headerdescription/Headerdescription';
import Progressbar from '../components/Progressbar/Progressbar';

const Followup = () => {
  return (
    <div className="container"> 
      <Headerdescription className="headerContainer" />
      <div className="contentWrapper">
        <Progressbar /> {/* No lead data needed */}
        <LeadSteps6 /> {/* No lead data passed */}
      </div>
    </div>
  );
};

export default Followup; // Fix the typo in the export statement
