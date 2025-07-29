'use client';

import JobCard from './components/JobCard';
import jobData from '@/data/jobs.json';
import { useState } from 'react';

export default function HomePage() {
  const [sortBy, setSortBy] = useState('Most relevant');

  return (
    <main className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Opportunities</h1>
          <p className="text-sm text-gray-500">
            Showing {jobData.job_postings.length} results
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-gray-600 font-medium">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white text-gray-700 focus:outline-none"
          >
            <option value="Most relevant">Most relevant</option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid gap-5">
        {jobData.job_postings.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </main>
  );
}
