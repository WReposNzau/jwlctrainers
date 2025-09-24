import dadlogo from '@/assets/dadlogo.png'
import { Button } from "@/components/ui/button";
import { ReviewModal } from './Review';

interface ReviewFormData {
  firstName: string
  lastName: string
  occupation: string
  nationality: string
  languageTrained: string
  review: string
  stars: number
}

interface FooterProps {
  handleNewReview: (newReview: ReviewFormData) => void;
}

export const Footer = ({ handleNewReview }: FooterProps) => {
 
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              
              {/* <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center"> */}
                  <div className="flex items-center space-x-2">
                      <img 
                          src={dadlogo} 
                          alt="Language learning session with diverse students" 
                          className="w-auto"
                           style={{filter: 'drop-shadow(4px 4px 10px rgba(214, 236, 241, 1))'}}
                        />
                      {/* <span className="text-xl font-bold text-foreground">JWLCT</span> */}
                </div>
              {/* </div> */}
              {/* <span className="text-xl font-bold">Julius Wambua Language and Cross Cultural Trainers</span> */}
            </div>
           
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 pt-50">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Group Classes</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">1-on-1 Training</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Corporate Training</a></li>
              {/* <li><a href="#services" className="hover:text-white transition-colors">Free Consultation</a></li> */}
            </ul>
          </div>
          
          {/* <div>
            <h3 className="font-semibold mb-4">Languages</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Spanish</li>
              <li>French</li>
              <li>German</li>
              <li>Italian</li>
              <li>And 11 more...</li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>juliuswambua63@gmail.com</li>
              <li>+254 712 876 858</li>
              <li>Online & Nairobi, Kenya</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Reviews</h3>
            <p className='mb-5'>Worked with us? </p>
              <Button variant="booking"> {<ReviewModal onReviewAdded={handleNewReview}/>} </Button>
            
            {/* <ul className="space-y-2 text-gray-300">
              <li>juliuswambua63@gmail.com</li>
              <li>+254 712 876 858</li>
              <li>Online & Nairobi, Kenya</li>
            </ul> */}
          </div>

          
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 JWLCT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};