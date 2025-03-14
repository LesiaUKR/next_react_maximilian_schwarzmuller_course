import fs from 'fs/promises';
import path from 'path';
// import { notFound, redirect } from 'next/navigation';
import Link  from 'next/link';

export default function HomePage(props) {
const {products} = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}><Link href={`/products/${product.id}`}>{product.title}</Link></li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  console.log('Re-Generating...');
  
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  // if (data.products.length === 0) {
  //   return {notFound: true};
    
  // }

  // if(!data){
  //   return {redirect:{
  //     destination: '/no-data',
  //   }};
  // }

  return {props:{
    products:data.products,
  },
    revalidate: 10,
  };
  
}

