import React from 'react';
import LeadSteps1 from '../components/Leadsteps1/LeadSteps1'; 
import Headerdescription from '../components/Headerdescription/Headerdescription';
import Progressbar from '../components/Progressbar/Progressbar';

const Detail = () => {
  return (
    <div className="container"> 
      <Headerdescription className="headerContainer" />
      <div className="contentWrapper">
        <Progressbar /> {/* No lead data needed */}
        <LeadSteps1 /> {/* No lead data passed */}
      </div>
    </div>
  );
};

export default Detail;
