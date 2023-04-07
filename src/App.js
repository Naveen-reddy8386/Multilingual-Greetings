import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    ActiveId: languageGreetingsList[0],
    buttonId: languageGreetingsList[0].id,
  }

  changeLanguage = id => {
    const filter = languageGreetingsList.filter(each => each.id === id)
    this.setState({ActiveId: filter[0], buttonId: id})
  }

  render() {
    const {ActiveId, buttonId} = this.state
    const {id, imageUrl, imageAltText} = ActiveId
    return (
      <div className="container">
        <h1>Multilingual Greetings</h1>
        <div>
          <ul>
            {languageGreetingsList.map(each => (
              <li key={each.id}>
                <button
                  className={buttonId === each.id ? 'active' : 'not-active'}
                  type="button"
                  onClick={() => this.changeLanguage(each.id)}
                >
                  {each.buttonText}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <img src={imageUrl} alt={imageAltText} />
      </div>
    )
  }
}
export default App
