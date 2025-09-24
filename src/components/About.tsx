import { Badge } from "@/components/ui/badge";

export const About = () => {
  // const languages = [
  //   "English", "Spanish", "French", "German", "Italian", "Portuguese", 
  //   "Mandarin", "Japanese", "Korean", "Arabic", "Russian", "Dutch"
  // ];
  const corporations = [
    "University of California LosAngeles(UCLA)", "DartMouth College", "British High Commission Nairobi", "Embassy of Spain Kenya ","US Embassy Nairobi","School Of International Training and Living(SIT)", "St. Lawrence University", "Lewis & Clerk University", "Kalamazoo University", "Canadian Field Studies in Africa (CFSIA)", "Médecins Sans Frontières (MSF)", "Norwegian Agency for Development Cooperation(NORAD)","SNV UK", "Peace Corps", "And Religious Organizations "
  ];

  const certifications = [
    "TESOL Certified",
    "Cambridge CELTA",
    "Applied Linguistics MA",
    "Polyglot Institute Graduate"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Meet Your Language Expert
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
With over a decade of experience in language education and cross-cultural training, we’ve supported hundreds of learners and professionals in achieving their communication goals across diverse languages and cultural settings.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">My Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                 We believe learning a language goes hand in hand with understanding culture. That’s why our training is engaging, practical, and tailored to your unique needs. By combining proven linguistic principles with modern technology and real-world applications, we ensure you gain skills that are both effective and relevant in today’s global environment.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 text-center shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Teaching</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-soft">
                <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-soft">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Nationalities Taught</div>
              </div>
            </div>
              
              {/* <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-6">Organizations I've worked with</h3>
              <div className="grid grid-cols-2 gap-3">
                {corporations.map((language, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
                    <span className="text-foreground">{language}</span>
                  </div>
                ))}
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};