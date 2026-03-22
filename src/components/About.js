import { Card, CardContent } from './ui/card';
import { Heart, Palette, Star } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {/* A passionate designer who believes that great design should be both beautiful and meaningful. */}
            A designer who loves exploring ideas, colors and cool visuals :)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg mb-6">
              I'm a budding UI/UX designer with a deep love for art, aesthetics and functionality. 
              I put users first, creating designs that are easy to use, clear, and also visually stunning.
              {/* My design philosophy centers around creating experiences that are not only 
              visually stunning but also intuitive and user-friendly. */}
            </p>
            <p className="text-lg mb-6">
              When I'm not designing, you'll find me swimming (if it's summer), reading, doing something artsy 
              like embroidery, painting, digital art, trying to learn piano again, or even baking!!
            </p>
            {/* <p className="text-lg">
              I believe that design has the power to make the world a more beautiful 
              and accessible place, one pixel at a time.
            </p> */}
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="border-none bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[var(--color-pastel-pink)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2">Passionate</h3>
                <p className="text-sm text-muted-foreground">
                  Driven by love for design and creating meaningful experiences
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[var(--color-pastel-purple)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2">Creative</h3>
                <p className="text-sm text-muted-foreground">
                  Always exploring different artistic approaches and design trends
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[var(--color-pastel-green)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2">Detail-Oriented</h3>
                <p className="text-sm text-muted-foreground">
                  A keen eye for every design element
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[var(--color-pastel-yellow)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2">Empathetic</h3>
                <p className="text-sm text-muted-foreground">
                  Understanding user needs and creating inclusive designs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}