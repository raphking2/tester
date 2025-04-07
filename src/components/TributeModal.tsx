
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

type TributeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TributeModal: React.FC<TributeModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the data to a server
    console.log({ name, relationship, phone, message });
    
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
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="John Doe" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="relationship">Relationship</Label>
            <Input 
              id="relationship" 
              value={relationship} 
              onChange={(e) => setRelationship(e.target.value)} 
              placeholder="Family, Friend, Colleague, etc." 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input 
              id="phone" 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              placeholder="+1 (555) 123-4567" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
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
