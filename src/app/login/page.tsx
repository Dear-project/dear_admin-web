import dynamic from 'next/dynamic';

const DynamicLoginPage = dynamic(() => import('src/Components/auth/Login/index'), {
  ssr: false 
});

export default function Login() {
  return <DynamicLoginPage />;
}
