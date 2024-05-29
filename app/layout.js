import Header from './components/main-header';
import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body>
        {children}
      </body>
    </html>
  );
}
