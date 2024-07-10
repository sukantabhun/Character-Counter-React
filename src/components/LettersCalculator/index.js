import {Component} from 'react'
import './index.css'

class LettersCalculatorApp extends Component {
  state = {inputData: ''}

  onChangeInputElement = event => {
    this.setState({inputData: event.target.value})
  }

  render = () => {
    const {inputData} = this.state
    return (
      <div className="container">
        <div className="letters-calculator-container">
          <div className="calculator-section">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <form className="input-container">
              <label className="label" htmlFor="inputElement">
                Enter the phrase
              </label>
              <input
                id="inputElement"
                type="text"
                className="input-element"
                value={inputData}
                onChange={this.onChangeInputElement}
                placeholder="Enter the phrase"
              />
            </form>
            <p className="letters-count">No.of letters: {inputData.length}</p>
          </div>
          <div className="image-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculatorApp
