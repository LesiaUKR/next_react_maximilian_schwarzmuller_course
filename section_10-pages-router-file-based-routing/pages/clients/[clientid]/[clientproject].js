import { useRouter } from 'next/router';

export default function SelectedClientProjectPage() {
   const router = useRouter();
   console.log(router.pathname);
     console.log(router.query);
  return (
    <div>
      <h1>The Project Page of a Specific Project for a Selected Client</h1>
    </div>
  );
}