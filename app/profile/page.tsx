'use client'
import { useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from "@/convex/_generated/api";
import Header from "@/components/ui/header";
import { Button } from '@/components/ui/button';

type FormData = {
  username: string;
  location: string;
  profile_bio: string;
  profile_picture: string;
  rating: number;
};

export default function ProfilePage() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    location: '',
    profile_bio: '',
    profile_picture: '',
    rating: 0
  });

  const userAdditionalInfo = useMutation(api.myFunctions.additionalUserInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await userAdditionalInfo({
        username: formData.username,
        location: formData.location,
        profile_bio: formData.profile_bio,
        profile_picture: formData.profile_picture,
        rating: formData.rating,
      });
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  return ( 
    <div className="w-full flex flex-col items-center p-4">
      <Header/>
      <h1 className="text-2xl font-bold my-6">Profile Page</h1>
      
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        
        <div className="space-y-2">
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            type="text"
            placeholder="Location"
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div className="space-y-2">
          <input
            name="profile_bio"
            value={formData.profile_bio}
            onChange={handleChange}
            type="text"
            placeholder="Profile Bio"
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div className="space-y-2">
          <input
            name="profile_picture"
            value={formData.profile_picture}
            onChange={handleChange}
            type="url"
            placeholder="Profile Picture URL"
            className="w-full p-2 border rounded"
          />
        </div>
        
{/*         <div className="space-y-2">
          <input
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            type="number"
            min="0"
            max="5"
            placeholder="Rating (0-5)"
            className="w-full p-2 border rounded"
          />
        </div> */}
        
        <Button
          type="submit"
          className="w-full text-white py-2 px-4 rounded transition-colors"
        >
          Save Profile
        </Button>
      </form>
    </div>
  );
}