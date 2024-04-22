import React from 'react'

function Book(props) {
    const book = props.book;

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
                <div className='container'>
                    {printNumbers()} 
                </div> 
            </div>
        </>
    )
}

export default Book
