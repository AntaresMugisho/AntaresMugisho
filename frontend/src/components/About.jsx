import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Smartphone, Monitor, Database, Globe } from 'lucide-react';
import { mockData } from '../data/mock';

const About = () => {
  const { personal } = mockData;

  const specialties = [
    {
      icon: <Globe size={40} />,
      title: 'Web Development',
      description: 'Building responsive and dynamic web applications using modern frameworks and technologies.'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications with React Native and native performance.'
    },
    {
      icon: <Monitor size={40} />,
      title: 'Desktop Applications',
      description: 'Developing robust desktop applications with PyQt and modern desktop frameworks.'
    },
    {
      icon: <Database size={40} />,
      title: 'Database Design',
      description: 'Designing efficient database schemas and optimizing query performance.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Cybersecurity',
      description: 'Implementing security best practices and conducting vulnerability assessments.'
    },
    {
      icon: <Code size={40} />,
      title: 'Full Stack',
      description: 'End-to-end development from concept to deployment with modern tech stacks.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About <span className="text-blue-600">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            {personal.bio}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {specialty.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {specialty.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {specialty.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-100 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 font-medium"
          >
            <span>📍</span>
            <span>{personal.location}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;