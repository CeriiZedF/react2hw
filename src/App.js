
import './App.css';
import BookC from './Book.jsx/BookC';
import Book from './Book.jsx/BookF';
import City from './City/City';
import User from './User/User';

function App() {
  let user = {
    firstName: 'Dmitry',
    lastName: 'Sergios',
    contactPhone: '+91241824098',
    email: 'giena-forever@gmail.com'
  }
  let city = {
    cityName: 'Odesa',
    cityCountry: 'Ukraine',
    yearCreate: '27 лютого 1932 року',
    arrSrc: [
      'https://th.bing.com/th?id=OSK.HEROn1E75-MeNhqs2Rnfal6WqKtgQ_r4xavPKw86VrXyWLo&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM',
      'https://www.bing.com/th?id=OIP.C59qIIgVo9qdu_QU44DTiQHaE7&w=202&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      'https://th.bing.com/th/id/OIP.xFi5UPPjZs2zQQo2-EFY4wHaFW?w=215&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      'https://th.bing.com/th/id/OIP.1IjqY6g7zEVaxp73NUG4RQHaEo?w=209&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    ]
  }
  let book = {
    name: 'Harry Potter and Philosofy Stone',
    fullNameAuthor: 'J. K. Rowling',
    style: 'Magic',
    countPages: 500,
    arrRecense: [
        'Like good book',
        '123123123123',
        'fd;f;jlkwer'
    ]
}

    
  return (
    <>
      <User user={user}/>
      <br/>
      <City city={city}/>
      <Book book={book}></Book>
      <BookC book={book}></BookC>
    </>
  );
}

export default App;
