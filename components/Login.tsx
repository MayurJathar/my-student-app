
import React, { useState } from 'react';
import Card from './Card';
import Input from './Input';
import Button from './Button';
import UserIcon from './icons/UserIcon';

interface LoginComponentProps {
  onLogin: (studentId: string) => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ onLogin }) => {
  const [studentId, setStudentId] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentId.trim() === '') {
      setError('Student ID cannot be empty.');
      return;
    }
    setError('');
    onLogin(studentId);
  };

  return (
    <Card title="Student Login" icon={<UserIcon className="w-8 h-8 text-indigo-500" />}>
      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">
            Student ID
          </label>
          <Input
            id="studentId"
            name="studentId"
            type="text"
            placeholder="Enter your student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <Button type="submit" fullWidth>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default LoginComponent;
