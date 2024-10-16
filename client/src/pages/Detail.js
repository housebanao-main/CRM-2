import React from 'react';
import LeadSteps from '../components/Leadsteps/LeadSteps'; 
import Headerdescription from '../components/Headerdescription/Headerdescription';
import Progressbar from '../components/Progressbar/Progressbar';

const Detail = () => {
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

export default Detail;
