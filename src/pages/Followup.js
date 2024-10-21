import React from 'react';
import LeadSteps from '../components/LeadSteps5/LeadSteps5'; 
import Headerdescription from '../components/Headerdescription/Headerdescription';
import Progressbar from '../components/Progressbar/Progressbar';

const Followup = () => {
  return (
    <div className="container"> 
      <Headerdescription className="headerContainer" />
      <div className="contentWrapper">
        <Progressbar /> {/* No lead data needed */}
        <LeadSteps /> {/* No lead data passed */}
      </div>
    </div>
  );
};

export default Followup;
