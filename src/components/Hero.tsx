import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium bg-background/80 backdrop-blur-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse" />
            Mock Portfolio Site - Not Real
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block">Crafting Digital</span>
            <span className="block gradient-text">Experiences</span>
            <span className="block">That Matter</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            I'm Jay, a passionate full-stack developer and designer creating
            beautiful, functional digital solutions for businesses that want to
            make an impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto"
              aria-label="View portfolio projects"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              aria-label="Contact for project discussion"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Let's Chat
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-16 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">45+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">32+</div>
              <div className="text-sm text-muted-foreground">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

