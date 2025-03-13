
export default function UserProfilePage(props) {
  return (
    <h1>
      {props.username}
    </h1>
  )
}

export async function getServerSideProps(context) {
   const { params, req, res } = context;
   console.log('Server side code');
   console.log(req);
   console.log(res);
   return {
      props: {
         username: 'Max'
      }
   };
}