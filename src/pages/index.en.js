import React from 'react';
import SectionOne from '../components/SectionOne/SectionOne';
import messages from '../data/messages/en'; // messages for english locale

const IndexPage = () => {
  return (
    <div>
      <SectionOne messages={messages} />
    </div>
  );
};

export default IndexPage;
