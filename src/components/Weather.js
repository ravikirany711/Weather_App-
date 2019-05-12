import React from 'react'

class Weather extends React.Component {
    render() {
        return (
            <div>
                Location:{this.props.city}, {this.props.country}

                Temperature: {this.props.temperature}
                {this.props.humidity}
                {this.props.description}



            </div>
        )
    }
}

export default Weather