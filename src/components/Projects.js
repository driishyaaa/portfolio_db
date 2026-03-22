import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Zameen-Landing Page',
      description: 'A single landing page for a real estate website.',
      image: '/images/proj1.png',
      tags: ['UI/UX Design', 'Website Landing Page', 'Prototyping'],
      // color: 'from-[var(--color-pastel-blue)]',
      liveUrl: '#',
      figmaUrl: '#'
    },
    {
      id: 2,
      title: 'Little Lemon - Website',
      description: 'A complete website design for a restaurant.',
      image: '/images/proj2.png',
      tags: ['UI Design', 'User Research', 'Interaction Design'],
      // color: 'from-[var(--color-pastel-green)]',
      liveUrl: '#',
      figmaUrl: '#'
    },
    {
      id: 3,
      title: 'Power Places- Website',
      description: 'A complete website design for a travel agency company.',
      image: '/images/proj3.png',
      tags: ['Web Design', 'Travel Agency', 'Branding'],
      // color: 'from-[var(--color-pastel-pink)]',
      liveUrl: '#',
      figmaUrl: '#'
    },
    {
      id: 4,
      title: 'Parking App',
      description: 'A clean and modern parking management system design in the making.',
      image: '/images/proj4.png',
      tags: ['Interaction Design', 'UI/UX', 'Website', 'Mobile App'],
      // color: 'from-[var(--color-pastel-purple)]',
      liveUrl: '#',
      figmaUrl: '#'
    },
    // {
    //   id: 5,
    //   title: 'Sunshine Weather',
    //   description: 'A delightful weather app with playful animations and a cheerful, optimistic interface.',
    //   image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //   tags: ['Mobile UI', 'Animation', 'Weather App'],
    //   color: 'from-[var(--color-pastel-yellow)]',
    //   liveUrl: '#',
    //   figmaUrl: '#'
    // },
    // {
    //   id: 6,
    //   title: 'Palette - Design System',
    //   description: 'A comprehensive design system focused on accessibility and beautiful pastel color combinations.',
    //   image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    //   tags: ['Design System', 'UI Components', 'Documentation'],
    //   color: 'from-[var(--color-pastel-peach)]',
    //   liveUrl: '#',
    //   figmaUrl: '#'
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[var(--color-pastel-yellow)] to-[var(--color-pastel-pink)/20]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my favorite design projects that showcase my passion for creating user-centered experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group border-none bg-white backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Figma
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}