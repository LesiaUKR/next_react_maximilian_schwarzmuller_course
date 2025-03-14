import { useEffect, useState } from "react"
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function LastSalesPage() {
   const [sales, setSales] = useState();  
   // const [isLoading, setIsLoading] = useState(false);

   const {data, error }=useSWR('https://nextjs-course-maxim-default-rtdb.europe-west1.firebasedatabase.app/sales.json',
    fetcher);

   // useEffect(() => {
   //    setIsLoading(true);
   //    fetch('https://nextjs-course-maxim-default-rtdb.europe-west1.firebasedatabase.app/sales.json')
   //       .then(response => response.json())
   //       .then(data => {
   //          const transformedSales = [];
   //          for (const key in data) {
   //             transformedSales.push({
   //                id: key,
   //                username: data[key].username,
   //                volume: data[key].volume
   //             });
   //          }
   //          setSales(transformedSales);
   //          setIsLoading(false);
   //       });
   // }, []);

   // if (isLoading) {
   //    return <p>Loading...</p>
   // }

   // if (!sales) {
   //    return <p>No data yet</p>
   // }

   useEffect(() => { 
      if(data){
         const transformedSales = [];
         for (const key in data) {
            transformedSales.push({
               id: key,
               username: data[key].username,
               volume: data[key].volume
            });
         }
         setSales(transformedSales);
      }
   }, [data, error]);

      if (error) {
      return <p>Failed to load</p>
   }

   if (!data) {
      return <p>Loading...</p>
   }

     if (!sales) {
      return <p>Loading...</p>
   }

  return (
    <ul>
      {sales.map(sale => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  )
}
