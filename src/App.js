import React from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = "70a77469dbb4c38512c8c43ae0fb4fa9"


class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${API_KEY}`)
    const data = await api_call.json()

  }
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App 