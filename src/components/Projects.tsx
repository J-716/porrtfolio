import { useState, useMemo, useCallback } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';
import projectsData from '@/data/projects.json';

interface ProjectsProps {
  className?: string;
}

const projects: Project[] = projectsData as Project[];

const categories = ['all', 'web', 'mobile', 'design', 'branding'] as const;
type Category = typeof categories[number];

export default function Projects({ className }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => 
    projects.filter(project => 
      selectedCategory === 'all' || project.category === selectedCategory
    ), [selectedCategory]
  );

  
  const displayProjects = useMemo(() => 
    showAll ? filteredProjects : filteredProjects.slice(0, 6), 
    [filteredProjects, showAll]
  );

  const handleCategoryChange = useCallback((category: Category) => {
    setSelectedCategory(category);
    setShowAll(false);
  }, []);

  const toggleShowAll = useCallback(() => {
    setShowAll(prev => !prev);
  }, []);

  return (
    <section id="projects" className={cn('section-padding', className)}>
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, featuring modern web applications, 
              mobile apps, and design projects that deliver real results.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryChange(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Show More/Less Button */}
          {filteredProjects.length > 6 && (
            <div className="text-center">
              <Button
                variant="outline"
                onClick={toggleShowAll}
                className="px-8"
              >
                {showAll ? 'Show Less' : `Show All ${filteredProjects.length} Projects`}
              </Button>
            </div>
          )}

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {projects.length}+
              </div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {new Set(projects.map(p => p.client)).size}+
              </div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {new Set(projects.flatMap(p => p.technologies)).size}+
              </div>
              <div className="text-sm text-muted-foreground">Technologies Used</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

