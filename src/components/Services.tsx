import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import serviceIcon1 from "@/assets/service-icon-1.jpg";
import serviceIcon2 from "@/assets/service-icon-2.jpg"; 
import serviceIcon3 from "@/assets/service-icon-3.jpg";
import { Clock, Users, Video, BookOpen, Landmark, Icon } from "lucide-react";


export const Services = () => {
  const services = [
    {
      icon:Users,
      title: "Group Classes",
      description: "Interactive group sessions with 4-6 students for collaborative learning",
      features: ["Weekly 90-minute sessions", "Structured curriculum", "Peer interaction", "Affordable pricing"],
      // price: "From $45/session",
      highlight: false
    },
    {
      icon: BookOpen,
      title: "1-on-1 Training",
      description: "Personalized language coaching tailored to your specific goals and pace",
      features: ["Customized lesson plans", "Flexible scheduling", "Focused attention", "Rapid progress"],
      // price: "From $85/hour",
      highlight: true
    },
    {
      icon: Landmark,
      title: "Corporate Training",
      description: "Accelerated programs for those who need to learn quickly",
      features: ["Daily sessions available", "Immersive approach", "Quick results", "Professional goals"],
      // price: "From $120/hour",
      highlight: false
    }
    // {
    //   icon: BookOpen,
    //   title: "Consultation Call",
    //   description: "Free 30-minute session to assess your needs and create a learning plan",
    //   features: ["Skill assessment", "Goal setting", "Learning plan", "Method recommendation"],
    //   price: "Free",
    //   highlight: false
    // }
  ];

  return (
    <section id="services" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-medium text-accent">Professional Services</span>
          </div> */}
          <h2 className="text-3xl lg:text-5xl font-bold text-primary">
            Discover Our Training Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore comprehensive language and cross-cultural training solutions designed to meet your specific needs and goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-soft ${
                service.highlight ? 'ring-2 ring-accent shadow-soft' : ''
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

               {/* <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardHeader> */}
              
              <CardHeader className="text-center">
                <div className={service.highlight ? `w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4` : `w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  {/* <div className="text-center">
                    <span className="text-2xl font-bold text-foreground">{service.price}</span>
                  </div> */}
                  
                  <Button 
                    variant={service.highlight ? "booking" : "outline"} 
                    className="w-full"
                  >
                    Schedule Free Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-12 py-3 text-primary border-primary hover:bg-primary hover:text-white">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};