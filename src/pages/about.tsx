import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">About</h1>
      
      <div className="prose max-w-none">
        <p>
          Welcome to the About page. This is where you can share information 
          about yourself, your company, or your project.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Our Mission</h2>
        <p>
          This section can include details about your mission, 
          values, and what drives your work.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Our Team</h2>
        <p>
          Introduce key team members or collaborators here.
        </p>
      </div>
    </div>
  );
}