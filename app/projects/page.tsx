'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { projects } from '@/data/portfolio-data';

const categories = ['All', 'Web', 'Mobile', 'Full Stack', 'API'] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="My Projects" 
          subtitle="A collection of my work and side projects"
        />

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'outline'}
              size="md"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="primary">{project.category}</Badge>
                    {project.featured && (
                      <Badge variant="success">Featured</Badge>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <Badge key={tech} size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github size={20} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={20} />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  )}
                  {!project.githubUrl && !project.liveUrl && (
                    <span className="text-sm text-gray-500 dark:text-gray-500 italic">
                      Private/Client Project
                    </span>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
