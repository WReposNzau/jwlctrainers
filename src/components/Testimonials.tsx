import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import { ReviewModal } from "./Review";

interface Testimonial {
  firstName: string;
  lastName: string;
  occupation: string;
  nationality:string
  languageTrained: string;
  review: string;
  stars: number;
}

interface TestimonialsProps {
  handleNewReview: (newReview: Testimonial) => void;
}

export const Testimonials = ({ handleNewReview }: TestimonialsProps) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [averagerate, setaverage] = useState("0")


  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://site-reviews-ten.vercel.app/reviews');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch reviews');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
    
  }, []);

  useEffect(() => {
  if (testimonials.length > 0) {
    const totalstars = testimonials.reduce((acc, item) => acc + item.stars, 0);
    const averagestars = (totalstars / testimonials.length).toFixed(2);
    setaverage(averagestars);
  }
}, [testimonials]);



  

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            What My Students Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real success stories from learners who achieved their language goals through dedicated training.
          </p>
        </div>
        
        <div className="grid items-center md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-soft">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{testimonial.review}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{`${testimonial.firstName} ${testimonial.lastName}`}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.occupation}, {testimonial.nationality}</div>
                  <div className="text-xs text-primary font-medium mt-1">
                    Learned {testimonial.languageTrained}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <ReviewModal onReviewAdded={handleNewReview} />
        </div> */}
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl p-6 shadow-soft">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{averagerate}</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};