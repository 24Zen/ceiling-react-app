import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);  // เรนเดอร์ App.js
  const linkElement = screen.getByText(/learn react/i);  // ค้นหาข้อความ "learn react"
  expect(linkElement).toBeInTheDocument();  // ตรวจสอบว่ามีข้อความนี้อยู่ในเอกสาร
});
