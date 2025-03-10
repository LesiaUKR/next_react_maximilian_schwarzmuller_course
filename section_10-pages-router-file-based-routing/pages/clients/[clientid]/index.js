import {useRouter} from 'next/router';

export default function ClientProjectsPage() {
   const router = useRouter();
   function loadProjectHandler() { 
router.push({
   pathname: '/clients/[clientid]/[clientprojectid]',
query: {clientid: '1', clientprojectid: 'projecta'}
});
   }
  return (
    <div>
        <h1>A projects of a Given Client</h1>
        <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}