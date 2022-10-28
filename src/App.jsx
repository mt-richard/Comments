import { useState } from 'react';
export default function App() {

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  
  function saveComment(e){
    e.preventDefault();
    setComments([...comments, comment]);
    // alert(comment);
    setComment();
  }
  return (
    <main className="container m-5">
      <form className="form-control ">
        <textarea value={comment} placeholder="Leave a comment" className="form-control mb-3" onChange={(e) => setComment(e.target.value)} >
        </textarea>
        <button onClick={saveComment} type="button" className="btn btn-primary">Send</button>
      </form>
      <ul>
        {comments.map((item, id) => (
            <li key={id}>{item}</li>
        ))}
         {/*<li>{comment}</li>*/}
      </ul>
      
    </main>
  )
}
