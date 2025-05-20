  import React, { useState } from 'react';

  function Recommendations() {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);

    const getRecommendations = async () => {
      setLoading(true);
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/recommendations', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
setRecommendations(data.jobs || []);

      setLoading(false);
    };

    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Find My Matches</h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
          onClick={getRecommendations}
          disabled={loading}
        >
          {loading ? 'Finding...' : 'Find My Matches'}
        </button>
        <div className="grid gap-4">
  {recommendations.map((job, idx) => (
  <div key={idx} className="p-4 border rounded shadow">
    <h3 className="font-semibold text-lg">{job.title}</h3>
    <p>{job.company} - {job.location}</p>
    <p className="text-sm text-gray-600">{Array.isArray(job.skills) ? job.skills.join(', ') : job.skills}</p>
  </div>
))}
        </div>
      </div>
    );
  }

  export default Recommendations;
