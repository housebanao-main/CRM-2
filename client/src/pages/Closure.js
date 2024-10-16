import React from 'react';
import LeadSteps6 from '../components/LeadSteps6/LeadSteps6'; // Ensure the correct path and name

import Headerdescription from '../components/Headerdescription/Headerdescription';
import Progressbar from '../components/Progressbar/Progressbar';

const QuotationDetails = () => {
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

export default QuotationDetails; // Fix the typo in the export statement
