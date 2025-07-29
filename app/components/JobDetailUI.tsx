"use client";

import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { MapPin, Calendar, Clock, CheckCircle } from "lucide-react";
import BackButton from "../components/ui/BackButton";
import { Job } from "@/types/jobs";

interface JobDetailUIProps {
  job: Job;
}

export default function JobDetailUI({ job }: JobDetailUIProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <BackButton className="mb-4" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-3">
            {/* Description */}
            <Card className="p-6 border-none shadow-none">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Description
              </h2>
              <p className="text-gray-800 text-[16px] leading-relaxed">
                {job.description}
              </p>
            </Card>

            {/* Responsibilities */}
            <Card className="p-6 border-none shadow-none">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
  <span className="w-4 h-4 mt-1 shrink-0 text-teal-500">
    <CheckCircle className="w-full h-full" />
  </span>
  <span className="text-gray-800 text-[16px]">{item}</span>
</li>

                ))}
              </ul>
            </Card>

            {/* Ideal Candidate */}
            <Card className="p-6 border-none shadow-none">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                Ideal Candidate we want
              </h2>
              <ul className="space-y-3 text-gray-800 text-[16px] list-disc ml-6">
                <li className="font-bold">
                  Young (18–24 year old) Female social media manager
                </li>
                {job.ideal_candidate.traits.map((trait, index) => (
                  <li key={index} className="leading-relaxed">
                    <span className="font-semibold">
                      {trait.split(":")[0]}:
                    </span>
                    <span> {trait.split(":").slice(1).join(":")}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* When & Where */}
            <Card className="p-6 border-none shadow-none">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                When & Where
              </h2>
              <div className="flex items-start gap-3 text-gray-800 text-[16px]">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <p>{job.when_where}</p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About */}
            <Card className="p-6 border-none shadow-none">
              <h3 className="text-xl font-bold mb-5 text-gray-900">About</h3>
              <ul className="space-y-5 text-sm text-gray-800">
                <li className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-500">Posted On</p>
                    <p className="font-medium">{job.about.posted_on}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-500">Deadline</p>
                    <p className="font-medium">{job.about.deadline}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-500">Location</p>
                    <p className="font-medium">{job.about.location}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-500">Start Date</p>
                    <p className="font-medium">{job.about.start_date}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-500">End Date</p>
                    <p className="font-medium">{job.about.end_date}</p>
                  </div>
                </li>
              </ul>
            </Card>

            <div className="border-t border-gray-400 w-full" />

            {/* Categories */}
            <Card className="p-6 border-none shadow-none">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {job.about.categories.map((category, i) => {
                  const colorClasses = [
                    "bg-yellow-100 text-yellow-800",
                    "bg-green-100 text-green-800",
                    "bg-purple-100 text-purple-800",
                    "bg-blue-100 text-blue-800",
                  ];

                  const badgeColor = colorClasses[i % colorClasses.length];

                  return (
                    <Badge key={i} variant="secondary" className={badgeColor}>
                      {category}
                    </Badge>
                  );
                })}
              </div>
            </Card>

            <div className="border-t border-gray-400 w-full" />

            {/* Required Skills */}
            <Card className="p-6 border-none shadow-none">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.about.required_skills.map((skill, i) => (
                  <Badge
                    key={i}
                    className="bg-gray-100 text-purple-600 font-medium px-3 py-1 rounded-md"
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
}
