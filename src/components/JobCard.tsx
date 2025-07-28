import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Job } from '@/data/jobsData';

interface JobCardProps {
  job: Job;
  onClick?: () => void;
}

export const JobCard = ({ job, onClick }: JobCardProps) => {
  return (
    <Card 
      className="p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer border border-border"
      onClick={onClick}
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <img
            src={job.image}
            alt={`${job.company} logo`}
            className="w-12 h-12 rounded-lg object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg text-foreground">{job.title}</h3>
          </div>
          
          <p className="text-muted-foreground text-sm mb-2">
            {job.company} • {job.about.location}
          </p>
          
          <p className="text-foreground text-sm mb-4 line-clamp-3">
            {job.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-accent/20 text-accent-foreground text-xs">
              {job.type}
            </Badge>
            <Badge variant="secondary" className="bg-warning/20 text-warning-foreground text-xs">
              {job.jobType}
            </Badge>
            <Badge variant="secondary" className="bg-primary/20 text-primary-foreground text-xs">
              IT
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};