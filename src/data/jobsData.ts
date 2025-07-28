import avatar1 from '@/assets/avatar-1.jpg';
import avatar2 from '@/assets/avatar-2.jpg';
import avatar3 from '@/assets/avatar-3.jpg';
import avatar4 from '@/assets/avatar-4.jpg';

export interface Job {
  id: string;
  title: string;
  company: string;
  image: string;
  description: string;
  responsibilities: string[];
  idealCandidate: {
    age: string;
    gender: string;
    traits: string[];
  };
  whenWhere: string;
  about: {
    postedOn: string;
    deadline: string;
    location: string;
    startDate: string;
    endDate: string;
    categories: string[];
    requiredSkills: string[];
  };
  type: 'In Person' | 'Remote' | 'Hybrid';
  jobType: 'Education' | 'IT' | 'Marketing' | 'Design' | 'Healthcare' | 'Finance' | 'Data Science' | 'Customer Service';
}

export const jobsData: Job[] = [
  {
    id: '1',
    title: 'Social media manager',
    company: 'ABC Media',
    image: avatar1,
    description: 'As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers. Your primary goal will be to enhance brand visibility, foster positive relationships with the audience, and drive engagement and conversions.',
    responsibilities: [
      'Community engagement to ensure that is supported and actively represented online',
      'Focus on social media content development and publication',
      'Marketing and strategy support',
      'Stay on top of trends on social media platforms, and suggest content ideas to the team',
      'Engage with online communities'
    ],
    idealCandidate: {
      age: '18-24',
      gender: 'Female',
      traits: [
        'Passionate & Reliable: Genuine interest in our mission and a strong desire to make a positive impact, responsible, and committed to fulfilling volunteer commitments.',
        'Adaptable, Team Player & Strong Communication Skills: Able to work effectively in diverse teams; and contributes positively. Flexible and open to embracing new challenges and shifting priorities; Clear verbal and written communication, active listening, and constructive feedback.',
        'Respectful: Embraces diversity, inclusive, and treats others with respect. Abides with all our rules and regulations.'
      ]
    },
    whenWhere: 'The onboarding event for this event will take place on Jan 18th, 2023 in AAU Auditorium.',
    about: {
      postedOn: 'Jul 1, 2023',
      deadline: 'Jul 31, 2023',
      location: 'Addis Ababa',
      startDate: 'Aug 02, 2023',
      endDate: 'Sep 02, 2023',
      categories: ['Marketing', 'Design'],
      requiredSkills: ['Social Media Marketing', 'English', 'Copywriting']
    },
    type: 'In Person',
    jobType: 'Marketing'
  },
  {
    id: '2',
    title: 'Web developer',
    company: 'Tech Innovators',
    image: avatar2,
    description: 'As a Web Developer, you will be responsible for designing, coding, and modifying websites, from layout to function according to a client\'s specifications. You will create visually appealing sites that feature user-friendly design and clear navigation.',
    responsibilities: [
      'Write well designed, testable, efficient code by using best software development practices',
      'Create website layout/user interface by using standard HTML/CSS practices',
      'Integrate data from various back-end services and databases',
      'Gather and refine specifications and requirements based on technical needs',
      'Create and maintain software documentation'
    ],
    idealCandidate: {
      age: 'Any',
      gender: 'Any',
      traits: [
        'Strong organizational skills to juggle multiple tasks within the constraints of timelines and budgets',
        'Ability to work and thrive in a fast-paced environment, learn rapidly, and master diverse web technologies and techniques',
        'Team player with a positive attitude and good interpersonal skills'
      ]
    },
    whenWhere: 'The onboarding event for this event will take place on Feb 10th, 2023 in BBIT Building, Room 202.',
    about: {
      postedOn: 'Jan 15, 2023',
      deadline: 'Feb 5, 2023',
      location: 'Addis Ababa, Ethiopia',
      startDate: 'Feb 15, 2023',
      endDate: 'Aug 15, 2023',
      categories: ['IT', 'Development'],
      requiredSkills: ['HTML', 'CSS', 'JavaScript', 'PHP']
    },
    type: 'In Person',
    jobType: 'IT'
  },
  {
    id: '3',
    title: 'Graphic designer',
    company: 'Creative Designs Co.',
    image: avatar3,
    description: 'As a Graphic Designer, you will create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers. You will develop the overall layout and production design for various applications such as advertisements, brochures, magazines, and corporate reports.',
    responsibilities: [
      'Develop graphics for product illustrations, logos, and websites',
      'Select colors, images, text style, and layout',
      'Present the design to clients or the art director',
      'Incorporate changes recommended by the clients into the final design',
      'Review designs for errors before printing or publishing them'
    ],
    idealCandidate: {
      age: 'Any',
      gender: 'Any',
      traits: [
        'A keen eye for aesthetics and details',
        'Excellent communication skills',
        'Ability to work methodically and meet deadlines',
        'Passionate about creating stunning visuals and innovative designs'
      ]
    },
    whenWhere: 'The onboarding event for this event will take place on Mar 5th, 2023 in Design Studio, 3rd Floor.',
    about: {
      postedOn: 'Feb 1, 2023',
      deadline: 'Feb 28, 2023',
      location: 'Cape Town, South Africa',
      startDate: 'Mar 10, 2023',
      endDate: 'Sep 10, 2023',
      categories: ['Design', 'Art'],
      requiredSkills: ['Adobe Photoshop', 'Adobe Illustrator', 'Creativity', 'Attention to detail']
    },
    type: 'In Person',
    jobType: 'Design'
  },
  {
    id: '4',
    title: 'Data analyst',
    company: 'Data Insights Inc.',
    image: avatar4,
    description: 'As a Data Analyst, you will be responsible for analyzing data sets to identify trends, patterns, and insights that can help inform business decisions. You will work closely with different departments to gather and interpret data, create reports, and provide recommendations based on your findings.',
    responsibilities: [
      'Interpret data, analyze results using statistical techniques and provide ongoing reports',
      'Develop and implement databases, data collection systems, data analytics, and other strategies',
      'Acquire data from primary or secondary data sources and maintain databases/data systems',
      'Identify, analyze, and interpret trends or patterns in complex data sets',
      'Filter and clean data by reviewing computer reports, printouts, and performance indicators'
    ],
    idealCandidate: {
      age: 'Any',
      gender: 'Any',
      traits: [
        'Strong analytical skills with the ability to collect, organize, analyze, and disseminate significant amounts of information',
        'Technical expertise regarding data models, database design development, data mining, and segmentation techniques',
        'Excellent written and verbal communication skills',
        'Ability to work independently and as part of a team'
      ]
    },
    whenWhere: 'The onboarding event for this event will take place on Apr 12th, 2023 in Conference Room B.',
    about: {
      postedOn: 'Mar 10, 2023',
      deadline: 'Apr 1, 2023',
      location: 'Lagos, Nigeria',
      startDate: 'Apr 15, 2023',
      endDate: 'Oct 15, 2023',
      categories: ['Data Science', 'Analytics'],
      requiredSkills: ['SQL', 'Python', 'Excel', 'Statistical Analysis']
    },
    type: 'In Person',
    jobType: 'Data Science'
  },
  {
    id: '5',
    title: 'Customer support specialist',
    company: 'Customer Care Ltd.',
    image: avatar1,
    description: 'As a Customer Support Specialist, you will provide product/services information and resolve any emerging problems that our customers might face with accuracy and efficiency. You will be patient, empathetic, and passionately communicative.',
    responsibilities: [
      'Manage large amounts of incoming calls and emails',
      'Identify and assess customers\' needs to achieve satisfaction',
      'Build sustainable relationships and trust with customer accounts through open and interactive communication',
      'Provide accurate, valid, and complete information by using the right methods/tools',
      'Handle customer complaints, provide appropriate solutions and alternatives within the time limits; follow up to ensure resolution'
    ],
    idealCandidate: {
      age: 'Any',
      gender: 'Any',
      traits: [
        'Strong phone contact handling skills and active listening',
        'Customer orientation and ability to adapt/respond to different types of characters',
        'Excellent communication and presentation skills',
        'Ability to multi-task, prioritize, and manage time effectively'
      ]
    },
    whenWhere: 'The onboarding event for this event will take place on May 20th, 2023 in Customer Support Center, Ground Floor.',
    about: {
      postedOn: 'Apr 15, 2023',
      deadline: 'May 10, 2023',
      location: 'Accra, Ghana',
      startDate: 'May 25, 2023',
      endDate: 'Nov 25, 2023',
      categories: ['Customer Service', 'Support'],
      requiredSkills: ['Communication Skills', 'Problem Solving', 'Patience', 'Attention to Detail']
    },
    type: 'In Person',
    jobType: 'Customer Service'
  }
];