import React, {Fragment} from 'react'

export default class TimeSlider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      scrubbing: false,
      scrubPosition: 0
    }
  }

  time = () => {
    let time = this.sliderPosition() / this.props.width * this.props.duration
    if (time < 0 || time > this.props.duration) time = 0
    return time
  }

  sliderPosition = () => {
    return this.state.scrubbing ? this.state.scrubPosition : this.props.duration ? this.props.width * this.props.currentTime / this.props.duration : 0
  }

  getEventHorizontalPosition = event => {
    if (typeof event.clientX === 'number') {
      return event.clientX - this.props.leftEdge
    }
    if (event.targetTouches.length) {
      return event.targetTouches[0].clientX - this.props.leftEdge
    }
    if (event.changedTouches.length) {
      return event.changedTouches[0].clientX - this.props.leftEdge
    }
    if (event.touches.length) {
      return event.touches[0].clientX - this.props.leftEdge
    }
    return 0
  }

  onGrabScrubber = (initialEvent) => {
    initialEvent.preventDefault()

    this.setState({
      scrubbing: true,
      scrubPosition: this.getEventHorizontalPosition(initialEvent)
    })

    if (initialEvent.type === 'mousedown') {
      this.addMouseListeners()
    } else if (initialEvent.type === 'touchstart') {
      this.addTouchListeners()
    }
  }

  onScrub = (event) => {
    event.preventDefault()
    this.setState({scrubPosition: this.getEventHorizontalPosition(event)})
  }

  onScrubDisrupted = (event) => {
    event.preventDefault()
    this.setState({scrubbing: false})
    this.removeListeners()
  }

  onScrubEnd = (event) => {
    event.preventDefault()
    this.setState({scrubbing: false})

    let newPosition = this.getEventHorizontalPosition(event)

    if (newPosition <= this.props.width && newPosition >= 0) {
      this.props.onTimeChanged(this.props.duration * newPosition / this.props.width)
    }

    this.removeListeners()
  }

  addTouchListeners = () => {
    window.addEventListener('touchmove', this.onScrub, {passive: false})
    window.addEventListener('touchend', this.onScrubEnd, {passive: false})
    window.addEventListener('touchcancel', this.onScrubDisrupted)
  }

  addMouseListeners = () => {
    window.addEventListener('mousemove', this.onScrub, {passive: false})
    window.addEventListener('mouseup', this.onScrubEnd, {passive: false})
  }

  removeListeners = () => {
    window.removeEventListener('mousemove', this.onScrub)
    window.removeEventListener('mouseup', this.onScrubEnd)
    window.removeEventListener('touchmove', this.onScrub)
    window.removeEventListener('touchend', this.onScrubEnd)
    window.removeEventListener('touchcancel', this.onScrubDisrupted)
  }

  render () {
    return (
      <Fragment>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox={`0 0 70 40`}
          width={70}
          height={40}
          style={{
            position: 'absolute',
            top: '-40px',
            left: '0',
            visibility: this.state.scrubbing ? 'visible' : 'hidden',
            transform: `translateX(${this.sliderPosition() > this.props.width - 35 ? this.props.width - 70 : Math.max(0, this.sliderPosition() - 35)}px)`
          }}
        >
          <polygon
            points='0,0 0,30 30,30 35,36 40,30 70,30 70,0'
            fill='#7799bb'
            stroke='#222222'
          />
          <text
            fill='white'
            y='50%'
            x='50%'
            textAnchor='middle'
          >
            {this.props.formatTime(this.time())}
          </text>
        </svg>
        <svg
          className={`scrubber${this.state.scrubbing ? ' scrubbing' : ''}`}
          style={{
            position: 'absolute',
            top: '-8px',
            left: '0'
          }}
          xmlns='http://www.w3.org/2000/svg'
          width={this.props.width}
          height={20}
          viewBox={`0 0 ${this.props.width} 20`}
        >

          <defs>
            <radialGradient id='gradient'>
              <stop offset='0%' stopColor='lightblue' />
              <stop offset='100%' stopColor='#6f04d4' />
            </radialGradient>
          </defs>
          <g
            onMouseDown={this.onGrabScrubber}
            onTouchStart={this.onGrabScrubber}
          >
            <rect
              x={0}
              y={0}
              width={this.props.width}
              height={20}
              opacity='0'
            />
            <rect
              x={0}
              y={8}
              rx={2}
              ry={2}
              width={this.props.width}
              height={4}
              fill='#E0E0E0'
            />
            <rect
              x={0}
              y={8}
              rx={2}
              ry={2}
              width={`${this.sliderPosition() >= 0 ? this.sliderPosition() : 0}`}
              height={4}
              fill='#a756f5'
            />
          </g>
          <g
            className='scrub-handle'
            onMouseDown={this.onGrabScrubber}
            onTouchStart={this.onGrabScrubber}
          >
            <circle
              cx={0}
              cy={10}
              r={7}
              style={{
                transform: `translate(${this.sliderPosition()}px)`,
                fill: 'url(#gradient)'
              }}
            />
          </g>
        </svg>
      </Fragment>
    )
  }
}
