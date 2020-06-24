import { Link } from 'react-router-dom';
import React from 'react';
import Banner from './perksbanner';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import mission from '../images/rupee.jpg';
import food from '../images/food.jpg';
import perks from '../images/perks.jpg';
const mapStateToProps = state => ({ ...state.auth,
    appName: state.common.appName,
    token: state.common.token });

class Perks extends React.Component {
  constructor() {
    super();
    
  }

  componentDidMount(){
    clearInterval();
  }

  render() {
    return (
      <div className="perks-page">
        
        <Banner token={this.props.token} appName={this.props.appName} />
        <div className="container page">
          <div className="row">
            <div className="col-md-12 col-xs-12">
            <h1 className="text-xs-center">A whopping salary of Rs 1000 per day</h1>
            </div>
          </div>
          <div className="row divsection">
            <div className="col-md-6 col-xs-6">
              <img src={mission} alt="" />
            </div>
            <div className="col-md-6 col-xs-6">
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xs-12">
            <h1 className="text-xs-center">Free food, water, clothes, accommodation</h1>
            </div>
          </div>
          <div className="row divsection">
            <div className="col-md-6 col-xs-6">
              <img src={food} />
            </div>
            <div className="col-md-6 col-xs-6">
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xs-12">
            <h1 className="text-xs-center">High level protection from the Illuminati</h1>
            </div>
          </div>
          <div className="row divsection">
            <div className="col-md-6 col-xs-6">
            <img src={perks} />
            </div>
            <div className="col-md-6 col-xs-6">
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xs-12">
            <h1 className="text-xs-center">Contribute to the making of a world of your choice</h1>
            </div>
          </div>
          <div className="row divsection">
            <div className="col-md-6 col-xs-6">
            <img src={perks} />
            </div>
            <div className="col-md-6 col-xs-6">
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xs-12">
            <h1 className="text-xs-center">Meet diverse people - broaden your network</h1>
            </div>
          </div>
          <div className="row divsection">
            <div className="col-md-6 col-xs-6">
            <img src={perks} />
            </div>
            <div className="col-md-6 col-xs-6">
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xs-12">
            <h1 className="text-xs-center">Fame</h1>
            </div>
          </div>
          <div className="row divsection">
            <div className="col-md-6 col-xs-6">
            <img src={perks} />
            </div>
            <div className="col-md-6 col-xs-6">
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <h1 className="text-xs-center">Finding the leader in you</h1>
            </div>
          </div>
          <div className="row divsection">
            <div className="col-md-6 col-xs-6">
            <img src={perks} />
            </div>
            <div className="col-md-6 col-xs-6">
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xs-12">
            <h1 className="text-xs-center">Pension</h1>
            </div>
          </div>
          <div className="row divsection">
          <div className="col-md-6 col-xs-6">
          <img src={perks} />
            </div>
            <div className="col-md-6 col-xs-6">
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Perks);
