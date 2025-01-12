import React from 'react';
import { Project } from '../../types';
import { Card, ProjectImage, ProjectInfo, ProjectTitle, ProjectDescription, ProjectLink } from './styles';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card>
      <ProjectImage src={project.image} alt={project.title} />
      <ProjectInfo>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </ProjectLink>
      </ProjectInfo>
    </Card>
  );
};

export default ProjectCard; 