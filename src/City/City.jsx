import React, { PureComponent } from 'react'

class City extends PureComponent {

    
    constructor(props) {
        super(props)
        this.state = props.city;
    }

    printNumbers0To5 = () => {
        const elements = [];
        for (var i = 0; i < this.state.arrSrc.length; i++) {
            elements.push(<img src={this.state.arrSrc[i]} alt="Not Found" />);
        }
        return elements;
      };

    render() {
        return (
            <>
                <h1>City Info</h1>
                <hr />
                <h2>City:{ this.state.cityName}</h2> 
                <h2>Country: {this.state.cityCountry}</h2>
                <h2>Date create: {this.state.yearCreate}</h2> 
                <div className='container'>
                    {this.printNumbers0To5()} 
                </div> 
            </>
        )
    }
}

export default City