import MainHeader from './components/header/main-header';
import './globals.css';

export const metadata = {
  title: 'Food For You',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
