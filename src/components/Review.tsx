import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Star } from 'lucide-react'
import {toast} from 'sonner'

interface ReviewFormData {
  firstName: string
  lastName: string
  occupation: string
  nationality: string
  languageTrained: string
  review: string
  stars:number
}

interface ReviewModalProps {
  onReviewAdded: (newReview: ReviewFormData) => void;
}

export function ReviewModal({onReviewAdded}: ReviewModalProps) {
  const [formData, setFormData] = useState<ReviewFormData>({
    firstName: '',
    lastName: '',
    occupation: '',
    nationality: '',
    languageTrained: '',
    review: '',
    stars:0
  })
  const[open,setOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    try {
    const response = await fetch('https://site-reviews-ten.vercel.app/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // console.log('Success:', data);
    onReviewAdded(data)
    
    // Reset form after successful submission
    setFormData({
      firstName: '',
      lastName: '',
      occupation: '',
      nationality: '',
      languageTrained: '',
      review: '',
      stars: 0
    });
    setOpen(false)
    toast.success('Review submitted successfully!');
    // You might want to close the modal or show a success message here
    
  } catch (error) {
    console.error('Error:', error);
    // Handle error - maybe show an error message to the user
    setOpen(false)
    toast.error('Review submitted successfully.');
  }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="booking">Leave a Review</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Leave a Review</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="occupation">Occupation</Label>
            <Input
              id="occupation"
              value={formData.occupation}
              onChange={(e) => setFormData({...formData, occupation: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="nationality">Nationality</Label>
            <Input
              id="nationality"
              value={formData.nationality}
              onChange={(e) => setFormData({...formData, nationality: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="languageTrained">Language Trained</Label>
            <Input
              id="languageTrained"
              value={formData.languageTrained}
              onChange={(e) => setFormData({...formData, languageTrained: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
  <Label>Rating</Label>
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        type="button"
        key={star}
        className="focus:outline-none"
        onClick={() => setFormData({...formData, stars: star})}
        onMouseEnter={(e) => {
          const target = e.currentTarget;
          target.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget;
          target.style.transform = 'scale(1)';
        }}
      >
        <Star
          className={`w-6 h-6 transition-all duration-200 ${
            star <= formData.stars
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-300'
          }`}
        />
      </button>
    ))}
  </div>
</div>

          <div className="space-y-2">
            <Label htmlFor="review">Your Review</Label>
            <Textarea
              id="review"
              value={formData.review}
              onChange={(e) => setFormData({...formData, review: e.target.value})}
              className="h-32"
              required
            />
          </div>

          <Button variant="hero" type="submit" className="w-full" >Submit Review</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}