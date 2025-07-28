import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, MapPin, Clock, User } from 'lucide-react';
import { Job } from '@/data/jobsData';

interface JobDetailProps {
  job: Job;
  onBack: () => void;
}

export const JobDetail = ({ job, onBack }: JobDetailProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Button 
          onClick={onBack}
          variant="ghost" 
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Jobs
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Description</h2>
              <p className="text-foreground leading-relaxed">
                {job.description}
              </p>
            </Card>

            {/* Responsibilities */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Responsibilities</h2>
              <ul className="space-y-4">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-foreground">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Ideal Candidate */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Ideal Candidate we want</h2>
              <div className="space-y-4">
                <div className="text-foreground">
                  <strong className="font-semibold">Age:</strong> {job.idealCandidate.age}
                </div>
                <div className="text-foreground">
                  <strong className="font-semibold">Gender:</strong> {job.idealCandidate.gender}
                </div>
                <div>
                  <strong className="font-semibold text-foreground">Traits:</strong>
                  <ul className="mt-2 space-y-2">
                    {job.idealCandidate.traits.map((trait, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-foreground">{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* When & Where */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">When & Where</h2>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground">{job.whenWhere}</p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">About</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Posted On</p>
                    <p className="font-medium text-foreground">{job.about.postedOn}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-warning" />
                  <div>
                    <p className="text-sm text-muted-foreground">Deadline</p>
                    <p className="font-medium text-foreground">{job.about.deadline}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-info" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">{job.about.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-success" />
                  <div>
                    <p className="text-sm text-muted-foreground">Start Date</p>
                    <p className="font-medium text-foreground">{job.about.startDate}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-destructive" />
                  <div>
                    <p className="text-sm text-muted-foreground">End Date</p>
                    <p className="font-medium text-foreground">{job.about.endDate}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {job.about.categories.map((category, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className={index === 0 ? "bg-yellow-100 text-yellow-800 rounded-full text-xs px-3 py-1 font-medium" : "bg-green-100 text-green-800 rounded-full text-xs px-3 py-1 font-medium"}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.about.requiredSkills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="text-primary border-primary/30"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};