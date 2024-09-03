import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}

function Book() {
  const title = 'Good Energy';
  const author = 'Calley Means';

  return (
    <article className='book'>
      <img src='./images/book-1.jpg' alt='Good Energy' />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
