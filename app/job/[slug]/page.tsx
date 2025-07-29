import JobDetailUI from "../../components/JobDetailUI";
import jobs from "@/data/jobs.json";
import { Job } from "@/types/jobs";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function JobPage({ params }: PageProps) {
  const job: Job | undefined = jobs.job_postings.find(
    (job) => job.title.toLowerCase().replace(/\s+/g, "-") === params.slug
  );

  if (!job) {
    return <div className="text-center text-red-500 mt-10">Job not found</div>;
  }

  return <JobDetailUI job={job} />;
}
