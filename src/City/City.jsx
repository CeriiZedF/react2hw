import React, { PureComponent } from 'react'

class City extends PureComponent {

    city = {
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

    printNumbers = () => {
        const elements = [];
        for (var i = 0; i < this.city.arrSrc.length; i++) {
            elements.push(<img src={this.city.arrSrc[i]} alt="Not Found" />);
        }
        return elements;
      };

    render() {
        return (
            <>
                <h1>City Info</h1>
                <hr />
                <h2>City:{ this.city.cityName}</h2> 
                <h2>Country: {this.city.cityCountry}</h2>
                <h2>Date create: {this.city.yearCreate}</h2> 
                <div className='container'>
                    {this.printNumbers()} 
                </div> 
            </>
        )
    }
}

export default City