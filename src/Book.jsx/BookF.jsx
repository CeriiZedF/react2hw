import React from 'react'

function Book() {
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

    function printNumbers()  {
        const elements = [];
        for (var i = 0; i < book.arrRecense.length; i++) {
            elements.push(<p>{ book.arrRecense[i]}</p>);
        }
        return elements;
      };
      
    return (
        <>
            <div className="container">
                <h1>My favorite book</h1>
                <p>Name: {book.name}</p>
                <p>Full Name Author: {book.fullNameAuthor}</p>
                <p>Style: {book.style}</p>
                <p>Count Page: {book.countPages.toString()}</p>
                <h2>Recense</h2>
                {printNumbers()}
            </div>
        </>
    )
}

export default Book
