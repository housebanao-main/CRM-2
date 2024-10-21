import React from 'react';
import LeadSteps6 from '../components/LeadSteps6/LeadSteps6'; 

import Headerdescription from '../components/Headerdescription/Headerdescription';
import Progressbar from '../components/Progressbar/Progressbar';

const QuotationDetails = () => {
  return (
    <div className="container"> 
      <Headerdescription className="headerContainer" />
      <div className="contentWrapper">
        <Progressbar /> 
        <LeadSteps6 /> 
      </div>
    </div>
  );
};

export default QuotationDetails; 
