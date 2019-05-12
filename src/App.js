import React from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = "70a77469dbb4c38512c8c43ae0fb4fa9"


class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value //whatever we type in to the input
    const country = e.target.elements.country.value //whatever we type in to the input


    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()
    console.log(data)
  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    )
  }
}

export default App 