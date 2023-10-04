import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
// Components
import ProviderWrapper from './ProviderWrapper';
// Styles
import '../styles/globals.css';

const RootLayout = async ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode;
}) => {
  const session = await getServerSession();

  // if (!session) redirect('/api/auth/signin');

  return (
    <html lang='en'>
      <body>
        <ProviderWrapper session={session}>{children}</ProviderWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
