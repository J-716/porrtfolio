import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface AboutProps {
  className?: string;
}

export default function About({ className }: AboutProps) {
  const skills = [
    'React & Next.js',
    'TypeScript',
    'Node.js',
    'Astro',
    'Tailwind CSS',
    'PostgreSQL',
    'Vercel'
  ];

  const values = [
    {
      title: 'User-Centered Design',
      description: 'Every project starts with understanding the user\'s needs and goals.'
    },
    {
      title: 'Performance First',
      description: 'Fast, accessible, and optimized experiences that work everywhere.'
    },
    {
      title: 'Clean Code',
      description: 'Maintainable, scalable solutions that stand the test of time.'
    }
  ];

  return (
    <section id="about" className={cn('section-padding bg-muted/30', className)}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="gradient-text">J Designs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Founded in 2020, J Designs specializes in creating digital experiences 
              that combine beautiful design with powerful functionality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Meet Jay</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer and designer with over 4 years of 
                experience creating digital solutions that make a difference. What started 
                as a curiosity about how websites work has evolved into a deep expertise 
                in modern web technologies and user experience design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At J Designs, I believe that great digital experiences come from the 
                perfect balance of form and function. Every project is an opportunity 
                to solve real problems and create something that users will love.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                    <img 
                      src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg" 
                      alt="Jay" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-medium">Jay</p>
                  <p className="text-sm text-muted-foreground">Founder & Lead Developer</p>
                </div>
              </div>
            </div>

            {/* Professional Headshot */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg" 
                  alt="Jay - Professional Headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <div className="w-6 h-6 rounded bg-primary/20" />
                  </div>
                  <h4 className="text-lg font-semibold">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}