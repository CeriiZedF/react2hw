import React, { PureComponent } from 'react'

class BookC extends PureComponent {
    book = {
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
   

    
    printNumbers = () => {
        const elements = [];
        for (var i = 0; i < this.book.arrRecense.length; i++) {
            elements.push(<p>{ this.book.arrRecense[i]}</p>);
        }
        return elements;
      };
    render() {
        return (
            <>
                <div className="container">
                <h1>My favorite book (Class Component)</h1>
                <p>Name: {this.book.name}</p>
                <p>Full Name Author: {this.book.fullNameAuthor}</p>
                <p>Style: {this.book.style}</p>
                <p>Count Page: {this.book.countPages.toString()}</p>
                <h2>Recense</h2>
                <div className='container'>
                    {this.printNumbers()} 
                </div> 
            </div>
            </>

        )
    }
}

export default BookC
