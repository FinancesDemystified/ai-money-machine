import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Money Machine - Interactive Mind Maps',
  description: 'Visualize JSON PRDs as interactive mind maps with expand/collapse functionality',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        {children}
      </body>
    </html>
  );
}
