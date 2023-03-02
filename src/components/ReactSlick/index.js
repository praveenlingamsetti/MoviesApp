import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Slider from 'react-slick'

import './index.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
}

class ReactSlick extends Component {
  renderSlider = () => {
    const {moviesList} = this.props

    return (
      <>
        <div className="movies-page">
          <Slider {...settings}>
            {moviesList.map(eachMovie => (
              <Link to={`/movies/${eachMovie.id}`} key={eachMovie.id}>
                <li testid="MovieCard" className="list-item" key={eachMovie.id}>
                  <img
                    src={eachMovie.posterPath}
                    alt={eachMovie.title}
                    className="movie-img"
                  />
                </li>
              </Link>
            ))}
          </Slider>
        </div>
      </>
    )
  }

  render() {
    return (
      <div className="main-container">
        <div className="slick-container">{this.renderSlider()}</div>
      </div>
    )
  }
}

export default withRouter(ReactSlick)
