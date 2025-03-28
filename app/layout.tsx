import { RouteProvider } from './context/RouteContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RouteProvider>
          <Layout>{children}</Layout>
        </RouteProvider>
      </body>
    </html>
  );
} 