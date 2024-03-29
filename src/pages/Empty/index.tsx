import React from 'react';

interface EmptyPageProps {
  title?: string;
}
const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <div>This is empty page for {title}</div>
    </div>
  );
};

export default EmptyPage;
