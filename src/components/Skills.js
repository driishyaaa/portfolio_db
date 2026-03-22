import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';

export function Skills() {
  const designSkills = [
    { name: 'UI/UX Design', level: 79 },
    { name: 'Prototyping', level: 78 },
    { name: 'User Research', level: 75 },
    { name: 'Wireframing', level: 78 },
    { name: 'Visual Design', level: 73 }
  ];

  const tools = [
    { name: 'Figma', level: 80 },
    { name: 'Adobe XD', level: 68 },
    { name: 'Photoshop', level: 65 },
    { name: 'Illustrator', level: 70 },
    { name: 'Canva', level: 65 }
  ];

  const technical = [
    { name: 'HTML5/Tailwind CSS', level: 75 },
    { name: 'JavaScript', level: 60 },
    { name: 'React', level: 55 },
    { name: 'Git', level: 60 },
    { name: 'Responsive Design', level: 82 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Skills & Expertise</h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for creating beautiful and functional digital experiences.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Design Skills */}
          {/* <Card className="border-none bg-gradient-to-br from-[var(--color-pastel-blue-transparent)] to-white"> */}
          <Card className="border-none bg-gradient-to-br from-[var(--color-pastel-green)/20] to-white">
            <CardHeader>
              <CardTitle className="text-center">Design Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {designSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">{skill.name}</span>
                    {/* <span className="text-sm text-muted-foreground"></span> */}
                  </div>
                  <Progress value={skill.level} className="h-2" colorClass="bg-primary1" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tools */}
          <Card className="border-none bg-gradient-to-br from-[var(--color-pastel-yellow)/20] to-white">
            <CardHeader>
              <CardTitle className="text-center">Design Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {tools.map((tool) => (
                <div key={tool.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">{tool.name}</span>
                    {/* <span className="text-sm text-muted-foreground"></span> */}
                  </div>
                  <Progress value={tool.level} className="h-2" colorClass="bg-primary4" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card className="border-none bg-gradient-to-br from-[var(--color-pastel-purple)/20] to-white">
            <CardHeader>
              <CardTitle className="text-center">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technical.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">{skill.name}</span>
                    {/* <span className="text-sm text-muted-foreground"></span> */}
                  </div>
                  <Progress value={skill.level} className="h-2" colorClass="bg-primary2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}