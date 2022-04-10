import React from 'react'

class App extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      pos: { x: 0, y: 0 },
      shadow: true,
      colors: [
        {
          background: '#2A2C39',
          text: '#ffffff',
          bold: '#FF4056',
        },
        {
          background: '#FCF751',
          text: '#2A2C39',
          bold: '#14151c',
        },
      ],
      background: null,
      text: null,
      bold: null,
    }
  }

  componentDidMount() {
    this.RandomBackground()
  }

  onMouseMove(e: any) {
    this.setState({
      pos: {
        x: e.pageX,
        y: e.pageY,
      },
    })

    this.CreateShadow()
  }

  CreateShadow() {
    if ('ontouchstart' in window == false && this.state.shadow) {
      let [moveX, moveY] = [this.state.pos.x / -100, this.state.pos.y / -120]

      let [Section, firstWord, secondWord] = [
        React.findDOMNode(this.refs.section),
        React.findDOMNode(this.refs.playword_1),
        React.findDOMNode(this.refs.playword_2),
      ]

      firstWord.style.transform = `translate3d(${moveX / 2}px, ${moveY}px, 0)`
      secondWord.style.transform = `translate3d(${moveX / 2}px, ${moveY}px, 0)`
      Section.style.textShadow = `${moveX}px ${-moveY}px rgba(0, 0, 0, 0.1)`
    }
  }

  RandomBackground() {
    let getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    let RandomID = getRandomInt(0, 1),
      SelectColor = this.state.colors[RandomID]

    console.log(RandomID)

    this.setState({
      background: this.state.colors[RandomID].background,
      text: this.state.colors[RandomID].text,
      bold: this.state.colors[RandomID].bold,
    })
  }

  render() {
    let sectionStyle = {
      backgroundColor: this.state.background,
      color: this.state.text,
    }
    let boldStyle = {
      color: this.state.bold,
    }

    return (
      <section
        id="app"
        onMouseMove={this.onMouseMove.bind(this)}
        style={sectionStyle}
      >
        <h1 className="middle" ref="section">
          Movement is{' '}
          <span className="bold" ref="playword_1" style={boldStyle}>
            here
          </span>
          .
          <br />
          And it is here to{' '}
          <span className="bold" ref="playword_2" style={boldStyle}>
            stay
          </span>
          .
        </h1>
      </section>
    )
  }
}

export default App
