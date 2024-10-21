import React from 'react';
import { useLocation } from 'react-router-dom';
import LeadSteps from '../components/Leadsteps/LeadSteps'; 
import Headerdescription from '../components/Headerdescription/Headerdescription';
import Details from '../components/Details/Details';
import Progressbar from '../components/Progressbar/Progressbar';

const Description = () => {
  const location = useLocation();
  const lead = location.state?.lead; // Get the lead data from state

  return (
    <div className="container"> 
      <Headerdescription className="headerContainer" />
      <div className="contentWrapper">
        <Details lead={lead} /> {/* Pass lead data to Details */}
        <Progressbar lead={lead} /> {/* Pass lead data to Progressbar */}
        <LeadSteps lead={lead} /> {/* Pass lead data to LeadSteps */}
      </div>
    </div>
  );
};

export default Description;
