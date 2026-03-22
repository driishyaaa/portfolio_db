import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Mail, MessageCircle, MapPin, Heart, Instagram, Linkedin, Github, Dribbble, Behance } from 'lucide-react';

export function Footer() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'drishyabhattarai@gmail.com',
      href: 'mailto:drishyabhattarai@gmail.com'
    },
    {
      icon: MessageCircle,
      label: 'Let\'s\ Chat',
      value: 'LinkedIn Direct Message',
      href: 'https://www.linkedin.com/in/drishya-bhattarai-354746223/'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      href: '#'
    }
  ];

  const socialLinks = [
    // {
    //   icon: Instagram,
    //   href: 'https://instagram.com',
    //   label: 'Instagram',
    //   color: 'hover:text-pink-500'
    // },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/drishya-bhattarai-354746223/',
      label: 'LinkedIn',
      color: 'hover:text-blue-500'
    },
    {
      icon: Dribbble,
      href: 'https://dribbble.com/drishyabhattarai',
      label: 'Dribbble',
      color: 'hover:text-pink-400'
    },
    {
      icon: Github,
      href: 'https://github.com/driishyaaa',
      label: 'GitHub',
      color: 'hover:text-purple-600'
    }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-[var(--color-pastel-purple)]/20 to-[var(--color-pastel-pink)]/20 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Let's Create Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm always excited to work on new projects and bring creative ideas to life. 
            Let's chat about your next design challenge!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="border-none bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2">{contact.label}</h3>
                <a 
                  href={contact.href}
                  className="text-muted-foreground hover:text-primary2 transition-colors"
                >
                  {contact.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4">Ready to start a project?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you need a complete design overhaul or just want to chat about ideas, 
              I'd love to hear from you!
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary2">
              <Mail className="h-5 w-5 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div> */}

        {/* Social Links & Copyright */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="ttext-xl bg-gradient-to-r from-primary to-primary2 bg-clip-text text-transparent">Drishya Bhattarai</span>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-white rounded-full flex items-center justify-center text-muted-foreground transition-all duration-200 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>by Drishya</span>
            </div>
          </div>
          
          <div className="text-center mt-6 text-sm text-muted-foreground">
            <p>&copy; 2025 Drishya Bhattarai. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}