import './globals.css';

export const metadata = {
  title: 'Student Portal',
  description: 'A simple student portal using Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
