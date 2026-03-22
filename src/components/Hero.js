import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  // Animation variants for floating elements
  const floatAnimation = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // const rotateAnimation = {
  //   animate: {
  //     rotate: [0, 360],
  //     transition: {
  //       duration: 8,
  //       repeat: Infinity,
  //       ease: "linear"
  //     }
  //   }
  // };

  const gentleFloat = {
    animate: {
      y: [-5, 5, -5],
      x: [-2, 2, -2],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Flower component
  const Flower = ({ className, type = "daisy", color = "var(--color-pastel-pink)" }) => {
    if (type === "daisy") {
      return (
        <div className={`relative ${className}`}>
          {/* Petals */}
          <div className="absolute inset-0">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
              <div
                key={index}
                className="absolute w-3 h-6 rounded-full opacity-80"
                style={{
                  background: color,
                  transformOrigin: 'center bottom',
                  transform: `rotate(${rotation}deg) translateY(-50%)`,
                  top: '50%',
                  left: '50%',
                  marginLeft: '-6px',
                  marginTop: '-12px'
                }}
              />
            ))}
          </div>
          {/* Center */}
          <div
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{ background: 'var(--color-pastel-yellow)' }}
          />
        </div>
      );
    } else if (type === "simple") {
      return (
        <div className={`relative ${className}`}>
          {/* 5 petals */}
          {[0, 72, 144, 216, 288].map((rotation, index) => (
            <div
              key={index}
              className="absolute w-2 h-4 rounded-full opacity-80"
              style={{
                background: color,
                transformOrigin: 'center bottom',
                transform: `rotate(${rotation}deg) translateY(-40%)`,
                top: '50%',
                left: '50%',
                marginLeft: '-4px',
                marginTop: '-8px'
              }}
            />
          ))}
          {/* Center */}
          <div
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{ background: 'var(--color-pastel-peach)' }}
          />
        </div>
      );
    } else if (type === "cherry") {
      return (
        <div className={`relative ${className}`}>
          {/* 5 heart-shaped petals */}
          {[0, 72, 144, 216, 288].map((rotation, index) => (
            <div
              key={index}
              className="absolute w-3 h-3 opacity-80"
              style={{
                background: color,
                transformOrigin: 'center bottom',
                transform: `rotate(${rotation}deg) translateY(-40%)`,
                top: '50%',
                left: '50%',
                marginLeft: '-6px',
                marginTop: '-6px',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
              }}
            />
          ))}
          {/* Center */}
          <div
            className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{ background: 'var(--color-pastel-yellow)' }}
          />
        </div>
      );
    }
  };

  // Leaf component
  const Leaf = ({ className, size = "medium", color = "var(--color-pastel-green)" }) => {
    const sizeClasses = {
      small: "w-3 h-6",
      medium: "w-4 h-8",
      large: "w-5 h-10"
    };

    return (
      <div
        className={`${sizeClasses[size]} opacity-70 ${className}`}
        style={{
          background: `linear-gradient(45deg, ${color}, ${color}dd)`,
          borderRadius: '0 100% 0 100%',
          transform: 'rotate(45deg)'
        }}
      />
    );
  };

  // Clover component
  const Clover = ({ className, type = "three", color = "var(--color-matcha-green)" }) => {
    if (type === "three") {
      return (
        <div className={`relative ${className}`}>
          {/* Three heart-shaped leaves */}
          {[0, 120, 240].map((rotation, index) => (
            <div
              key={index}
              className="absolute w-4 h-4 opacity-90"
              style={{
                background: `linear-gradient(135deg, ${color}, ${color}dd)`,
                transformOrigin: 'center bottom',
                transform: `rotate(${rotation}deg) translateY(-30%)`,
                top: '50%',
                left: '50%',
                marginLeft: '-8px',
                marginTop: '-8px',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
              }}
            />
          ))}
          {/* Small stem */}
          <div
            className="absolute top-1/2 left-1/2 w-1 h-5 transform -translate-x-1/2 rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${color}99, ${color})`,
              marginTop: '4px'
            }}
          />
        </div>
      );
    } else if (type === "four") {
      return (
        <div className={`relative ${className}`}>
          {/* Four heart-shaped leaves */}
          {[0, 90, 180, 270].map((rotation, index) => (
            <div
              key={index}
              className="absolute w-3 h-3 opacity-90"
              style={{
                background: `linear-gradient(135deg, ${color}, ${color}dd)`,
                transformOrigin: 'center bottom',
                transform: `rotate(${rotation}deg) translateY(-25%)`,
                top: '50%',
                left: '50%',
                marginLeft: '-6px',
                marginTop: '-6px',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
              }}
            />
          ))}
          {/* Small stem */}
          <div
            className="absolute top-1/2 left-1/2 w-1 h-4 transform -translate-x-1/2 rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${color}99, ${color})`,
              marginTop: '2px'
            }}
          />
        </div>
      );
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left relative">
            {/* Left side decorative elements */}
            <motion.div
              className="absolute -left-12 top-0 w-8 h-8 hidden lg:block"
              variants={floatAnimation}
              animate="animate"
            >
              <Flower type="daisy" color="var(--color-pastel-pink)" />
            </motion.div>

            <motion.div
              className="absolute -left-8 top-16 hidden lg:block"
              variants={pulseAnimation}
              animate="animate"
            >
              <Leaf size="small" color="var(--color-pastel-green)" />
            </motion.div>

            {/* Clover 1 - Left side of text */}
            <motion.div
              className="absolute -left-16 top-32 w-8 h-10 hidden lg:block"
              variants={gentleFloat}
              animate="animate"
            >
              <Clover type="three" color="var(--color-matcha-green)" />
            </motion.div>

            <motion.div
              className="absolute -left-10 top-48 w-6 h-6 hidden lg:block"
              variants={floatAnimation}
              animate="animate"
            >
              <Flower type="simple" color="var(--color-pastel-blue)" />
            </motion.div>

            <motion.div
              className="absolute -left-6 top-64 hidden lg:block"
              variants={pulseAnimation}
              animate="animate"
            >
              <Leaf size="medium" color="var(--color-pastel-green)" />
            </motion.div>

            <motion.div
              className="absolute -left-14 top-80 w-7 h-7 hidden lg:block"
              variants={gentleFloat}
              animate="animate"
            >
              <Flower type="cherry" color="var(--color-pastel-purple)" />
            </motion.div>

            {/* Right side decorative elements */}
            <motion.div
              className="absolute -right-10 top-8 w-8 h-8 hidden lg:block"
              variants={pulseAnimation}
              animate="animate"
            >
              <Flower type="simple" color="var(--color-pastel-peach)" />
            </motion.div>

            <motion.div
              className="absolute -right-6 top-24 hidden lg:block"
              variants={floatAnimation}
              animate="animate"
            >
              <Leaf size="small" color="var(--color-pastel-green)" />
            </motion.div>

            {/* Clover 2 - Right side of text */}
            <motion.div
              className="absolute -right-14 top-40 w-7 h-9 hidden lg:block"
              variants={pulseAnimation}
              animate="animate"
            >
              <Clover type="four" color="var(--color-matcha-green)" />
            </motion.div>

            <motion.div
              className="absolute -right-12 top-56 w-6 h-6 hidden lg:block"
              variants={floatAnimation}
              animate="animate"
            >
              <Flower type="daisy" color="var(--color-pastel-yellow)" />
            </motion.div>

            <motion.div
              className="absolute -right-8 top-72 hidden lg:block"
              variants={pulseAnimation}
              animate="animate"
            >
              <Leaf size="medium" color="var(--color-pastel-green)" />
            </motion.div>

            <motion.div
              className="absolute -right-4 top-88 w-5 h-5 hidden lg:block"
              variants={gentleFloat}
              animate="animate"
            >
              <Flower type="cherry" color="var(--color-pastel-pink)" />
            </motion.div>

            {/* Mobile decorative elements */}
            <motion.div
              className="absolute top-0 left-4 w-5 h-5 lg:hidden"
              variants={floatAnimation}
              animate="animate"
            >
              <Flower type="simple" color="var(--color-pastel-pink)" />
            </motion.div>

            <motion.div
              className="absolute top-0 right-4 lg:hidden"
              variants={pulseAnimation}
              animate="animate"
            >
              <Leaf size="small" color="var(--color-pastel-green)" />
            </motion.div>

            <motion.div
              className="absolute top-16 left-2 w-4 h-4 lg:hidden"
              variants={gentleFloat}
              animate="animate"
            >
              <Flower type="daisy" color="var(--color-pastel-blue)" />
            </motion.div>

            <motion.div
              className="absolute top-16 right-2 lg:hidden"
              variants={floatAnimation}
              animate="animate"
            >
              <Leaf size="small" color="var(--color-pastel-green)" />
            </motion.div>

            {/* Clover 3 - Mobile left */}
            <motion.div
              className="absolute top-6 left-8 w-4 h-6 lg:hidden"
              variants={pulseAnimation}
              animate="animate"
            >
              <Clover type="three" color="var(--color-matcha-green)" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground relative z-10">
              Hi, I'm <span className="text-primary">Drishya</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 relative z-10">
              UI/UX Designer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0 relative z-10">
              A computer engineering graduate passionate about art, design, tech and bringing ideas to life!!
              I create user-centered digital experiences that look good, feel simple and work smoothly :)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-10">
              <Button size="lg" className="bg-primary hover:bg-primary">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
           <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[var(--color-pastel-pink)] to-[var(--color-pastel-blue)] p-2">
                <ImageWithFallback
                  src="/images/piccc.png"
                  alt="Drishya's cameo"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Enhanced decorative elements around image */}
              <motion.div
                className="absolute -top-8 -right-8 w-12 h-12"
                variants={floatAnimation}
                animate="animate"
              >
                <Flower type="daisy" color="var(--color-pastel-yellow)" />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8"
                variants={pulseAnimation}
                animate="animate"
              >
                <Leaf size="large" color="var(--color-pastel-green)" />
              </motion.div>

              {/* Additional floating elements around image */}
              <motion.div
                className="absolute top-16 -left-12 w-8 h-8"
                variants={gentleFloat}
                animate="animate"
              >
                <Flower type="cherry" color="var(--color-pastel-purple)" />
              </motion.div>

              <motion.div
                className="absolute top-48 -right-12 w-10 h-10"
                variants={floatAnimation}
                animate="animate"
              >
                <Flower type="simple" color="var(--color-pastel-peach)" />
              </motion.div>

              <motion.div
                className="absolute bottom-16 right-12"
                variants={pulseAnimation}
                animate="animate"
              >
                <Leaf size="medium" color="var(--color-pastel-green)" />
              </motion.div>

              <motion.div
                className="absolute bottom-32 -left-8 w-6 h-6"
                variants={floatAnimation}
                animate="animate"
              >
                <Flower type="daisy" color="var(--color-pastel-pink)" />
              </motion.div>

              <motion.div
                className="absolute top-4 right-16"
                variants={gentleFloat}
                animate="animate"
              >
                <Leaf size="small" color="var(--color-pastel-green)" />
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-16 w-5 h-5"
                variants={pulseAnimation}
                animate="animate"
              >
                <Flower type="simple" color="var(--color-pastel-blue)" />
              </motion.div>

              {/* Clover 4 - Around image */}
              <motion.div
                className="absolute top-32 -right-16 w-8 h-10"
                variants={gentleFloat}
                animate="animate"
              >
                <Clover type="three" color="var(--color-matcha-green)" />
              </motion.div>

              {/* Clover 5 - Around image */}
              <motion.div
                className="absolute bottom-48 -left-12 w-7 h-9"
                variants={floatAnimation}
                animate="animate"
              >
                <Clover type="four" color="var(--color-matcha-green)" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>

        {/* Background floating elements */}
        <motion.div
          className="absolute top-20 left-1/4 w-10 h-10 opacity-20 -z-10"
          variants={floatAnimation}
          animate="animate"
        >
          <Flower type="daisy" color="var(--color-pastel-pink)" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-1/4 opacity-20 -z-10"
          variants={pulseAnimation}
          animate="animate"
        >
          <Leaf size="large" color="var(--color-pastel-green)" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-1/3 w-8 h-8 opacity-20 -z-10"
          variants={gentleFloat}
          animate="animate"
        >
          <Flower type="cherry" color="var(--color-pastel-yellow)" />
        </motion.div>

        <motion.div
          className="absolute bottom-60 right-1/3 opacity-20 -z-10"
          variants={floatAnimation}
          animate="animate"
        >
          <Leaf size="medium" color="var(--color-pastel-green)" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-16 w-6 h-6 opacity-15 -z-10"
          variants={pulseAnimation}
          animate="animate"
        >
          <Flower type="simple" color="var(--color-pastel-blue)" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-16 opacity-15 -z-10"
          variants={gentleFloat}
          animate="animate"
        >
          <Leaf size="small" color="var(--color-pastel-green)" />
        </motion.div>
      </div>
    </section>
  );
}




