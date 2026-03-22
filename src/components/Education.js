import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export function Education() {
  const education = [
    {
      institution: 'Advanced College of Engineering and Management - TU',
      degree: 'Bachelor of Engineering',
      period: '2025',
      description: 'Specialized in frontend, web and mobile UI development as well as UI/UX design, while fostering strong team work and communication skills.',
      grade: 'Computer Engineering',
      icon: GraduationCap
    },
    {
      institution: 'Uniglobe HSS',
      degree: '+2',
      period: '2019',
      description: 'High school degree specialized in science; biology.',
      grade: 'SLC',
      icon: GraduationCap
    },
    {
      institution: 'Shuvatara School',
      degree: 'Schooling',
      period: '2017',
      description: 'Gained strong values in collaboration, respect, and responsibility.',
      grade: 'SEE',
      icon: GraduationCap
    },
    // {
    //   institution: 'Design Institute',
    //   degree: 'UX/UI Design Bootcamp',
    //   period: '2022',
    //   description: 'Intensive 6-month program covering user research, prototyping, and design thinking methodologies.',
    //   grade: 'Top 5% of class',
    //   icon: BookOpen
    // }
  ];

  const certifications = [
    {
      name: 'Google UX Design Certificate',
      issuer: 'Coursera',
      year: '2025;running',
      description: 'Comprehensive program covering the design process from research to high-fidelity prototyping.'
    },
    {
      name: 'Meta Front-End Developer Certificate',
      issuer: 'Coursera',
      year: '2025',
      description: 'Certification in frontend development focusing on HTML5, CSS, JavaScript, React and Principles of UI/UX Design.'
    },
    // {
    //   name: 'Figma Advanced Certification',
    //   issuer: 'Figma',
    //   year: '2022',
    //   description: 'Advanced certification covering design systems, prototyping, and collaborative design.'
    // },
    // {
    //   name: 'Human-Computer Interaction',
    //   issuer: 'Stanford Online',
    //   year: '2022',
    //   description: 'Course covering principles of HCI and user-centered design methodologies.'
    // }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Education & Certifications</h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and growth through formal education and professional development.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl mb-8 text-center lg:text-left">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-none bg-gradient-to-br from-primary2/20 to-primary1/20">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <edu.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                        <p className="text-primary">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{edu.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {edu.grade}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl mb-8 text-center lg:text-left">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-none bg-gradient-to-br from-[var(--color-pastel-pink)/20] to-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base">{cert.name}</CardTitle>
                        <p className="text-sm text-primary">{cert.issuer} • {cert.year}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}