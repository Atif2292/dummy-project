import React, { useState } from 'react';

function Profile() {
  const [form, setForm] = useState({
    name: '',
    location: '',
    experience: '',
    skills: '',
    jobType: 'any',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    await fetch('http://localhost:5000/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });
    alert('Profile saved!');
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full mb-3 p-2 border rounded" />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="w-full mb-3 p-2 border rounded" />
      <input name="experience" value={form.experience} onChange={handleChange} placeholder="Years of Experience" className="w-full mb-3 p-2 border rounded" />
      <input name="skills" value={form.skills} onChange={handleChange} placeholder="Skills (comma separated)" className="w-full mb-3 p-2 border rounded" />
      <select name="jobType" value={form.jobType} onChange={handleChange} className="w-full mb-4 p-2 border rounded">
        <option value="any">Any</option>
        <option value="remote">Remote</option>
        <option value="onsite">Onsite</option>
      </select>
      <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save Profile</button>
    </div>
  );
}

export default Profile;
