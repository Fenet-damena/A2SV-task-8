'use client';

import { useState, useEffect } from 'react';

export interface Job {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgName: string;
  logoUrl: string;
  orgEmail: string;
  orgWebsite: string;
  datePosted: string;
}

export default function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://akil-backend.onrender.com/opportunities/search')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch jobs');
        return res.json();
      })
      .then((data) => {
        if (data && Array.isArray(data)) {
          setJobs(data);
        } else if (data && data.data && Array.isArray(data.data)) {
          setJobs(data.data); // if response is wrapped inside a data property
        } else {
          throw new Error('Invalid data format from API');
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { jobs, loading, error };
}
