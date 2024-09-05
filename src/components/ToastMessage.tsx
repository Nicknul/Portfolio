import React from 'react';
import iconStyles from '../styles/iconStyles'; // 스타일 불러오기

interface ToastMessageProps {
  message: string;
  isVisible: boolean;
}

const ToastMessage: React.FC<ToastMessageProps> = ({ message, isVisible }) => {
  return <div className={`${iconStyles.toastMessage} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{message}</div>;
};

export default ToastMessage;
