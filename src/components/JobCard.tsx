"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Job } from "@/data/jobsData";

interface JobCardProps {
  job: Job;
  onClick?: () => void;
}

export const JobCard = ({ job, onClick }: JobCardProps) => {
  return (
    <Card
      className="p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer border border-border rounded-2xl"
      onClick={onClick}
    >
      <div className="flex gap-4">
        {/* Logo Image */}
        <div className="flex-shrink-0">
          <img
            src={job.image}
            alt={`${job.company} logo`}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Job Info */}
        <div className="flex-1">
          {/* Title & Company */}
          <div className="mb-2">
            <h3 className="font-semibold text-lg text-foreground">
              {job.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {job.company} • {job.about.location}
            </p>
          </div>

          {/* Description */}
          <p className="text-foreground text-sm mb-4 line-clamp-3">
            {job.description}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-green-100 text-green-800 rounded-full text-xs px-3 py-1 font-medium">
              {job.type}
            </Badge>
            <Badge className="bg-yellow-100 text-yellow-800 rounded-full text-xs px-3 py-1 font-medium">
              {job.jobType}
            </Badge>
            <Badge className="bg-indigo-100 text-indigo-800 rounded-full text-xs px-3 py-1 font-medium">
              IT
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};
