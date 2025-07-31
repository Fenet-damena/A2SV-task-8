import JobDetailUI from '../../components/JobDetailUI';
import useJobs from '@/hooks/useJobs';

type PageProps = {
  params: { slug: string };
};

export default function JobPage({ params }: PageProps) {
  const { jobs, loading, error } = useJobs();

  if (loading) return <p className="text-center mt-10">Loading job...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  const job = jobs.find(
    (job) => job.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!job) {
    return <div className="text-center text-red-500 mt-10">Job not found</div>;
  }

  return <JobDetailUI job={job} />;
}
