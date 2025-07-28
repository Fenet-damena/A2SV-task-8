# Job Listing Hub

A modern job listing application built with React, TypeScript, and Tailwind CSS. This application displays job opportunities in an attractive card-based layout with detailed job descriptions.

## Features

- **Job Dashboard**: Browse through available job opportunities
- **Job Cards**: Clean, modern cards displaying job information
- **Job Details**: Comprehensive view of individual job postings
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Professional Avatars**: AI-generated professional avatar images
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## Screenshots

### Job Dashboard Page
The main dashboard displays all available job opportunities in a clean, organized list format. Users can sort jobs by relevance, date, or deadline. Each job card shows essential information including the organization logo, job title, location, and a brief description.

*Features shown:*
- Job listings with organization avatars
- Sort functionality
- Category badges
- Professional card design
- Responsive layout

### Job Detail Page
The detailed view provides comprehensive information about each job opportunity including full descriptions, responsibilities, ideal candidate requirements, and all relevant dates and locations.

*Features shown:*
- Complete job description
- Responsibilities with bullet points
- Ideal candidate requirements
- When & where information
- About section with key dates
- Required skills and categories
- Professional typography and layout

## Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Lucide React** - Modern icon library
- **React Router** - Client-side routing

## Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── JobCard.tsx        # Individual job card component
│   ├── JobDetail.tsx      # Detailed job view component
│   └── JobDashboard.tsx   # Main dashboard component
├── data/
│   └── jobsData.ts        # Job data and TypeScript interfaces
├── assets/
│   └── avatar-*.jpg       # AI-generated professional avatars
└── pages/
    └── Index.tsx          # Main application entry point
```

## Key Components

### JobCard Component
- Displays job summary information
- Shows organization avatar
- Includes job categories and type badges
- Responsive hover effects
- Click handler for navigation to detail view

### JobDetail Component
- Comprehensive job information display
- Organized sections for description, responsibilities, and requirements
- Sidebar with key dates and metadata
- Back navigation functionality
- Professional layout with proper typography

### JobDashboard Component
- Main listing page with all jobs
- Sort functionality
- Clean, organized layout
- State management for job selection

## Design System

The application uses a carefully crafted design system with:
- **Color Palette**: Professional blues, greens, and neutrals
- **Typography**: Clear hierarchy with proper contrast
- **Spacing**: Consistent spacing throughout the application
- **Components**: Reusable UI components from shadcn/ui
- **Icons**: Lucide React icons for consistency

## Installation and Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open browser to `http://localhost:8080`

## Data Structure

The application uses TypeScript interfaces to ensure type safety:

```typescript
interface Job {
  id: string;
  title: string;
  organization: string;
  location: string;
  avatar: string;
  description: string;
  postedOn: string;
  deadline: string;
  startDate: string;
  endDate: string;
  categories: string[];
  requiredSkills: string[];
  responsibilities: string[];
  idealCandidate: string[];
  whenWhere: string;
  type: 'In Person' | 'Remote' | 'Hybrid';
  jobType: string;
}
```

## Future Enhancements

- Search functionality
- Filter by categories and job types
- User authentication and applications
- Bookmark favorite jobs
- Advanced sorting options
- Mobile app version
