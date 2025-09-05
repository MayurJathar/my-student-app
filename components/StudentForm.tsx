
import React, { useState } from 'react';
import { Student } from '../types';
import Card from './Card';
import Input from './Input';
import Button from './Button';
import UserIcon from './icons/UserIcon';

interface StudentFormComponentProps {
  studentId: string;
  onSubmit: (details: Student) => void;
}

const StudentFormComponent: React.FC<StudentFormComponentProps> = ({ studentId, onSubmit }) => {
  const [formData, setFormData] = useState<Omit<Student, 'id'>>({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation can be added here
    onSubmit({ id: studentId, ...formData });
  };

  return (
    <Card title="Your Details" icon={<UserIcon className="w-8 h-8 text-indigo-500" />}>
      <p className="text-center text-gray-600 mb-6">
        Logged in as Student ID: <span className="font-bold text-indigo-600">{studentId}</span>
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <Input id="name" name="name" type="text" placeholder="e.g., Jane Doe" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
          <Input id="address" name="address" type="text" placeholder="e.g., 123 University Ave" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <Input id="city" name="city" type="text" placeholder="e.g., Metropolis" value={formData.city} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State / Province</label>
            <Input id="state" name="state" type="text" placeholder="e.g., California" value={formData.state} onChange={handleChange} required />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">ZIP / Postal Code</label>
              <Input id="zip" name="zip" type="text" placeholder="e.g., 90210" value={formData.zip} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <Input id="phone" name="phone" type="tel" placeholder="e.g., (555) 123-4567" value={formData.phone} onChange={handleChange} required />
            </div>
        </div>
        <div className="pt-4">
            <Button type="submit" fullWidth>
            Submit Details
            </Button>
        </div>
      </form>
    </Card>
  );
};

export default StudentFormComponent;
