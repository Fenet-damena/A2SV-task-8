'use client';

import { CheckCircle, Calendar, Clock, MapPin } from 'lucide-react';

interface JobDetailUIProps {
  job: {
    id: string;
    title: string;
    orgName: string;
    description: string;
    responsibilities: string;  // multiline string
    idealCandidate: string;     // multiline string
    whenAndWhere: string;
    logoUrl: string;
    location: string[];
    categories: string[];
    requiredSkills: string[];
    startDate: string;
    endDate: string;
    datePosted: string;
    deadline: string;
  };
}

export default function JobDetailUI({ job }: JobDetailUIProps) {
  // Convert responsibilities string to array
  const responsibilitiesList = job.responsibilities
    ? job.responsibilities.split('\n').filter(Boolean)
    : [];

  // Convert idealCandidate string to array
  const idealCandidateList = job.idealCandidate
    ? job.idealCandidate.split('\n').filter(Boolean)
    : [];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={job.logoUrl || '/default-logo.png'}
            alt={`${job.orgName} logo`}
            className="w-16 h-16 object-cover rounded-full"
          />
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">{job.title}</h1>
            <p className="text-gray-700 text-lg">{job.orgName}</p>
          </div>
        </div>

        {/* Description */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Description</h2>
          <p className="text-gray-800 leading-relaxed">{job.description}</p>
        </section>

        {/* Responsibilities */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Responsibilities</h2>
          <ul className="list-disc list-inside space-y-1">
            {responsibilitiesList.length > 0 ? (
              responsibilitiesList.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))
            ) : (
              <p className="text-gray-600 italic">No responsibilities listed.</p>
            )}
          </ul>
        </section>

        {/* Ideal Candidate */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Ideal Candidate</h2>
          <ul className="list-disc list-inside space-y-1">
            {idealCandidateList.length > 0 ? (
              idealCandidateList.map((item, i) => <li key={i}>{item}</li>)
            ) : (
              <p className="text-gray-600 italic">No ideal candidate info provided.</p>
            )}
          </ul>
        </section>

        {/* When & Where */}
        <section className="mb-6 flex items-center gap-2 text-gray-700">
          <MapPin className="w-5 h-5 text-blue-600" />
          <p>{job.whenAndWhere || (job.location && job.location.join(', ')) || 'Location not specified'}</p>
        </section>

        {/* Sidebar Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Dates */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Start Date</p>
                <p>{new Date(job.startDate).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">End Date</p>
                <p>{new Date(job.endDate).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Posted On</p>
                <p>{new Date(job.datePosted).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Deadline</p>
                <p>{new Date(job.deadline).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {job.categories && job.categories.length > 0 ? (
                job.categories.map((category, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {category}
                  </span>
                ))
              ) : (
                <p className="text-gray-600 italic">No categories specified.</p>
              )}
            </div>
          </div>

          {/* Required Skills */}
          <div>
            <h3 className="text-xl font-bold mb-2">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.requiredSkills && job.requiredSkills.length > 0 ? (
                job.requiredSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p className="text-gray-600 italic">No required skills listed.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
