import { useState } from 'react';
export default function App() {

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  function onSend(e) {
    e.preventDefault();
    setComments([...comments, comment]);
    // alert(comment);
    setComment("");
  }

  return (
    <main className="container m-5">
      <form className="">
        <textarea value={comment} placeholder="Leave a comment" 
          className="form-control mb-3" 
          onChange={(e) => setComment(e.target.value)} >
        </textarea>
        <button onClick={onSend} type="button" className="btn btn-primary">Send</button>
      </form>

      <ul>
        {comments.map((item, id) => (<li key={id}>{item}</li>))}
      </ul>
    </main>
  );
}
