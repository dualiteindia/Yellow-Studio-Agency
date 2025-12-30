import React from 'react';
import { cn } from '../utils/cn';
import { Reveal } from './Reveal';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

interface WorkItemProps {
  image: string;
  title: string;
  index: string;
  id: string;
  className?: string;
  imageHeight?: string;
  fullWidth?: boolean;
}

const WorkItem: React.FC<WorkItemProps> = ({ 
  image, 
  title, 
  index, 
  id,
  className, 
  imageHeight = "h-[420px]", 
  fullWidth = false
}) => (
  <Link to={`/work/${id}`} className={cn("flex flex-col gap-4 group w-full cursor-pointer", className)}>
    <Reveal>
      <div 
        className={cn(
          "relative w-full overflow-hidden bg-gray-100",
          fullWidth ? "rounded-[24px]" : "rounded-[20px]",
          imageHeight
        )}
      >
        <img 
          src={image} 
          alt={`Work project ${title}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </Reveal>
    
    {/* Meta Row */}
    <div className="flex items-baseline justify-between px-1 mt-2">
      <h3 className="font-sans text-[14px] font-bold uppercase tracking-wide text-black">
        {title}
      </h3>
      <span className="font-sans text-[12px] text-gray-400 font-medium">
        {index}
      </span>
    </div>
  </Link>
);

export const WorkGrid: React.FC = () => {
  return (
    <section className="w-full max-w-content px-6 md:px-10 mx-auto pb-24 pt-12">
      
      {/* SECTION HEADER - Left Aligned */}
      <div className="flex justify-between items-baseline w-full mb-[64px]">
        <h2 className="font-sans font-black text-[32px] md:text-[48px] uppercase tracking-tight text-black">
          WORK
        </h2>
        <Link to="/work" className="font-sans text-[13px] font-medium text-black hover:opacity-60 transition-opacity">
          All work &rarr;
        </Link>
      </div>

      {/* WORK GRID */}
      <div className="flex flex-col w-full">

        {/* ROW 1: Split */}
        <div className="flex flex-col md:flex-row gap-[32px] md:gap-[40px] mb-[64px] md:mb-[96px]">
          <div className="w-full md:w-1/2">
            <WorkItem 
              image={projects[0].gridImage}
              title={projects[0].title}
              index={projects[0].index}
              id={projects[0].id}
              imageHeight="h-[320px] md:h-[420px]"
            />
          </div>
          <div className="w-full md:w-1/2 md:mt-12"> {/* Staggered look */}
            <WorkItem 
              image={projects[1].gridImage}
              title={projects[1].title}
              index={projects[1].index}
              id={projects[1].id}
              imageHeight="h-[320px] md:h-[420px]"
            />
          </div>
        </div>

        {/* ROW 2: Full Width */}
        <div className="w-full mb-[80px] md:mb-[100px]">
          <WorkItem 
            image={projects[2].gridImage}
            title={projects[2].title}
            index={projects[2].index}
            id={projects[2].id}
            imageHeight="h-[400px] md:h-[680px]"
            fullWidth
          />
        </div>

        {/* ROW 3: Split */}
        <div className="flex flex-col md:flex-row gap-[32px] md:gap-[40px] mb-[80px] md:mb-[100px]">
          <div className="w-full md:w-[40%]">
            <WorkItem 
              image={projects[3].gridImage}
              title={projects[3].title}
              index={projects[3].index}
              id={projects[3].id}
              imageHeight="h-[300px] md:h-[380px]"
            />
          </div>
          <div className="w-full md:w-[60%]">
            <WorkItem 
              image={projects[4].gridImage}
              title={projects[4].title}
              index={projects[4].index}
              id={projects[4].id}
              imageHeight="h-[360px] md:h-[500px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
