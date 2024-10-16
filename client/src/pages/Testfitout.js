import React from 'react';
import LeadSteps4 from '../components/LeadSteps4/LeadSteps4'; 
import Headerdescription from '../components/Headerdescription/Headerdescription';
import Progressbar from '../components/Progressbar/Progressbar';

const QuotationDetails = () => {
  return (
    <div className="container"> 
      <Headerdescription className="headerContainer" />
      <div className="contentWrapper">
        <Progressbar /> {/* No lead data needed */}
        <LeadSteps4 /> {/* No lead data passed */}
      </div>
    </div>
  );
};

export default QuotationDetails; // Fix the typo in the export statement
