
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';
type TributeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TributeModal: React.FC<TributeModalProps> = ({ isOpen, onClose }) => {
  // const [name, setName] = useState('');
  // const [relationship, setRelationship] = useState('');
  // const [phone, setPhone] = useState('');
  // const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    relationship: '',
    category: 'Family',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
if (!backendUrl) {
  console.error('Backend URL is not defined in environment variables');
  return;
}

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(backendUrl)
    e.preventDefault();
    
    // In a real application, this would send the data to a server
    // console.log({ name, relationship, phone, message });

    try {
      await axios.post('/api/tributes', formData);
      // alert('Tribute submitted successfully!');
      onClose();
      setFormData({
        name: '',
        relationship: '',
        category: 'Family',
        phone: '',
        message: ''
      });
    } catch (error) {
      alert('Error submitting tribute');
    }
    
    toast({
      title: "Tribute Submitted",
      description: "Thank you for your condolence message.",
    });
    
    // Reset form and close modal
    setName('');
    setRelationship('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-medium">Send Your Tribute</DialogTitle>
          <DialogDescription className="text-center">
            Share your memories and condolences for Sir Cosmas Chibueze Ugwoke.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input 
              id="name" 
              value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="name" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="relationship">Relationship</Label>
            <Input 
              id="relationship" 
              value={formData.relationship}
              onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
              placeholder="Family, Friend, Colleague, etc." 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input 
              id="phone" 
              type="tel" 
              value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+234 5551234567" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea 
              id="message" 
              value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Share your memories or condolences..." 
              rows={5} 
              required 
            />
          </div>
          
          <DialogFooter className="sm:justify-center">
            <Button type="submit" className="bg-gold hover:bg-gold-dark text-white">
              Submit Tribute
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TributeModal;
