
import React from 'react';
import { Student } from '../types';
import Card from './Card';
import Button from './Button';
import CheckCircleIcon from './icons/CheckCircleIcon';

interface SuccessComponentProps {
  student: Student;
  onLogout: () => void;
}

const SuccessComponent: React.FC<SuccessComponentProps> = ({ student, onLogout }) => {
  return (
    <Card title="Submission Successful" icon={<CheckCircleIcon className="w-8 h-8 text-green-500" />}>
      <div className="text-center space-y-4 text-gray-700">
        <p>Thank you, <span className="font-bold text-indigo-600">{student.name}</span>!</p>
        <p>Your details have been successfully updated for Student ID: <span className="font-bold text-indigo-600">{student.id}</span>.</p>
        <p>You can now log out.</p>
        <div className="pt-4">
            <Button onClick={onLogout} fullWidth variant="secondary">
                Log Out
            </Button>
        </div>
      </div>
    </Card>
  );
};

export default SuccessComponent;
