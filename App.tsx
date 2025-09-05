
import React, { useState, useCallback } from 'react';
import { Student } from './types';
import LoginComponent from './components/Login';
import StudentFormComponent from './components/StudentForm';
import SuccessComponent from './components/Success';
import AcademicCapIcon from './components/icons/AcademicCapIcon';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [studentId, setStudentId] = useState<string | null>(null);
  const [studentDetails, setStudentDetails] = useState<Student | null>(null);

  const handleLogin = useCallback((id: string) => {
    setStudentId(id);
    setIsLoggedIn(true);
  }, []);

  const handleSubmit = useCallback((details: Student) => {
    setStudentDetails(details);
    setIsSubmitted(true);
  }, []);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setIsSubmitted(false);
    setStudentId(null);
    setStudentDetails(null);
  }, []);

  const renderContent = () => {
    if (!isLoggedIn) {
      return <LoginComponent onLogin={handleLogin} />;
    }
    if (isLoggedIn && !isSubmitted) {
      return <StudentFormComponent studentId={studentId!} onSubmit={handleSubmit} />;
    }
    if (isLoggedIn && isSubmitted && studentDetails) {
      return <SuccessComponent student={studentDetails} onLogout={handleLogout} />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <header className="mb-8 text-center">
        <div className="inline-block bg-white p-4 rounded-full shadow-md mb-4">
          <AcademicCapIcon className="w-12 h-12 text-indigo-600" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight">
          College Student Portal
        </h1>
        <p className="text-gray-600 mt-2">Welcome! Please proceed to update your details.</p>
      </header>
      <main className="w-full max-w-lg">
        {renderContent()}
      </main>
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} University of Excellence. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
