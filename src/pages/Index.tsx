import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useState } from "react";

interface Review {
  firstName: string;
  lastName: string;
  occupation: string;
  nationality: string;
  languageTrained: string;
  review: string;
  stars: number;
}

const Index = () => {

  const [reviews, setReviews] = useState<Review[]>([]);

  const handleNewReview = (newReview: Review) => {
    setReviews(prev => [newReview, ...prev]);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials handleNewReview={handleNewReview}/>
      <Contact />
      <Footer  handleNewReview={handleNewReview}/>
    </div>
  );
};

export default Index;
