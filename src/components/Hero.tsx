import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-language-learning.jpg";
import dadlogo from '@/assets/dadlogo.png'

export const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full">
                {/* <span className="text-sm font-medium text-accent">Julius Wambua Language & Cross-Cultural Trainers</span> */}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight"> 
                 <span className="bg-gradient-hero bg-clip-text text-transparent"> Swahili </span> made simple with
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Expert </span> guidance
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Unlock the rhythm and beauty of Swahili. More than just words, you’ll gain the skills to connect deeply with people, culture, and traditions, while growing into a confident communicator
                 </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Explore Services
              </Button>
              <Button variant="booking" size="lg" className="text-lg px-8 py-4">
                Book Consultation
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm ">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm ">Clients Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm">Countries Served</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* <div className="relative overflow-hidden rounded-2xl shadow-soft"> */}
              <img 
                src={dadlogo} 
                alt="Language learning session with diverse students" 
                className="w-full h-[500px] object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
            {/* </div> */}
            
            {/* Floating stats cards */}
            {/* <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-soft">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div> */}
            
            {/* <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-soft">
              <div className="text-2xl font-bold text-accent">4.9★</div>
              <div className="text-sm text-muted-foreground">Student Rating</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};