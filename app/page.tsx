'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Database, Cloud } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { personalInfo, projects, skills } from '@/data/portfolio-data';

export default function HomePage() {
  const featuredProjects = projects.filter(p => p.featured);
  const skillCategories = ['Frontend', 'Backend', 'Mobile', 'Cloud'] as const;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="primary" className="mb-6">
                Available for freelance projects
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {personalInfo.role}
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/projects">
                <Button size="lg">
                  View My Work <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: personalInfo.yearsOfExperience },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Happy Clients', value: '30+' },
              { label: 'Technologies', value: skills.length + '+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Technologies I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, title: 'Frontend', color: 'text-blue-500' },
              { icon: Database, title: 'Backend', color: 'text-green-500' },
              { icon: Smartphone, title: 'Mobile', color: 'text-purple-500' },
              { icon: Cloud, title: 'Cloud', color: 'text-orange-500' },
            ].map((category, index) => {
              const Icon = category.icon;
              const categorySkills = skills.filter(s => s.category === category.title);
              
              return (
                <Card key={category.title} glassmorphism>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className={`${category.color} mb-4`} size={40} />
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.slice(0, 4).map(skill => (
                        <Badge key={skill.name} size="sm">
                          {skill.name}
                        </Badge>
                      ))}
                      {categorySkills.length > 4 && (
                        <Badge size="sm" variant="primary">
                          +{categorySkills.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </motion.div>
                </Card>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/about">
              <Button variant="outline">
                View All Skills <ArrowRight size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Some of my recent work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mb-4">
                    <Badge variant="primary">{project.category}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map(tech => (
                      <Badge key={tech} size="sm">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge size="sm" variant="primary">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </motion.div>
              </Card>
            ))}
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/projects">
              <Button variant="primary" size="lg">
                View All Projects <ArrowRight size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card glassmorphism className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Let's Work Together
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Have a project in mind? Let's discuss how I can help bring your ideas to life.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Start a Project <ArrowRight size={20} />
                </Button>
              </Link>
            </motion.div>
          </Card>
        </div>
      </section>
    </div>
  );
}
