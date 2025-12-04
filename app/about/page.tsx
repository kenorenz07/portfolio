'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { personalInfo, experiences, skills } from '@/data/portfolio-data';

export default function AboutPage() {
  const skillsByCategory = {
    Frontend: skills.filter(s => s.category === 'Frontend'),
    Backend: skills.filter(s => s.category === 'Backend'),
    Mobile: skills.filter(s => s.category === 'Mobile'),
    Cloud: skills.filter(s => s.category === 'Cloud'),
    Tools: skills.filter(s => s.category === 'Tools'),
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <section className="mb-20">
          <SectionHeader 
            title="About Me" 
            subtitle="Get to know more about my journey and expertise"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg blur-2xl opacity-20" />
                <Card glassmorphism className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-8xl font-bold mb-2">
                        {personalInfo.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="text-2xl font-medium">{personalInfo.role}</div>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Full Stack Developer with a Passion for Innovation
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  With over {personalInfo.yearsOfExperience} years of professional experience in web and mobile 
                  development, I've had the privilege of working with diverse teams and clients to bring 
                  innovative digital solutions to life.
                </p>
                <p>
                  My expertise spans across the entire development stack, from building responsive 
                  frontend interfaces with React and Vue.js to architecting robust backend systems 
                  with Laravel and Node.js. I'm particularly passionate about creating seamless user 
                  experiences and writing clean, maintainable code.
                </p>
                <p>
                  I thrive in collaborative environments and enjoy tackling complex technical 
                  challenges. Whether it's optimizing database performance, implementing GraphQL 
                  APIs, or building cross-platform mobile applications, I bring dedication and 
                  expertise to every project.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {personalInfo.yearsOfExperience}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-20">
          <SectionHeader 
            title="Work Experience" 
            subtitle="My professional journey"
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-700 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="md:ml-20">
                    <Card>
                      {/* Timeline dot */}
                      <div className="absolute -left-12 top-6 hidden md:block">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                          <Briefcase size={16} className="text-white" />
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <Badge variant="primary">{exp.period}</Badge>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="text-primary-500 mr-2">▹</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(tech => (
                          <Badge key={tech} size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <SectionHeader 
            title="Technical Skills" 
            subtitle="Technologies and tools I work with"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    <Award className="text-primary-500" size={24} />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map(skill => (
                      <Badge key={skill.name} variant="default">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
