import React, { PureComponent } from 'react'

class BookC extends PureComponent {
    constructor(props) {
        super(props)

        this.state = props.book;
    }
    printNumbers = () => {
        const elements = [];
        for (var i = 0; i < this.state.arrRecense.length; i++) {
            elements.push(<p>{ this.state.arrRecense[i]}</p>);
        }
        return elements;
      };
    render() {
        return (
            <>
                <div className="container">
                <h1>My favorite book (Class Component)</h1>
                <p>Name: {this.state.name}</p>
                <p>Full Name Author: {this.state.fullNameAuthor}</p>
                <p>Style: {this.state.style}</p>
                <p>Count Page: {this.state.countPages.toString()}</p>
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
