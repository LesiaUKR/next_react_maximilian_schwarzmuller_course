import { Fragment, useState } from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

export default function FeedbackPage(props) {
   const [feedbackItem, setFeedbackItem] = useState(props.feedbackItems);
   function feedbackDetailsHandler(id) { 
fetch(`/api/${id}`)
.then((response) => response.json())
   .then((data) => { 
      setFeedbackItem(data.feedback);
 });
   }
   return (
      <Fragment>
         {feedbackItem && <p>{feedbackItem.email}</p>}
         <ul>
        {props.feedbackItems.map((item) => (
           <li key={item.id}>{item.feedback}
           <button onClick={feedbackDetailsHandler.bind(null, item.id)}>Show Details</button>
           </li>
        ))}
      </ul></Fragment> 
  );
}

export async function getStaticProps() {
const filePath = buildFeedbackPath();
   const data = extractFeedback(filePath);
   return {
      props: {
         feedbackItems: data
      }
   };
}