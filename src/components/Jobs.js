import React, { useEffect, useState } from 'react';

function Jobs() {
  const [jobs, setJobs] = useState([]);
useEffect(() => {
  const token = localStorage.getItem('token');
console.log(token);
  fetch('http://localhost:5000/api/jobs', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(res => {
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  
    return res.json();
  })
  .then(data => setJobs(data.jobs || []) )
  .catch(err => console.error('Error loading jobs:', err));


}, []);



  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      <div className="grid gap-4">
        {jobs.map((job, idx) => (
          <div key={idx} className="p-4 border rounded shadow">
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <p>{job.company} - {job.location}</p>
            <p className="text-sm text-gray-600">{job.skills.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
