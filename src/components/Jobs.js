import { Link } from 'react-router-dom';
import React from 'react';
import Banner from './Home/Banner';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
const mapStateToProps = state => ({ ...state.auth,
    appName: state.common.appName,
    token: state.common.token });

class Jobs extends React.Component {
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
              <h1 className="text-xs-center">Head</h1>
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <h1 className="text-xs-center">Cheif Advisor</h1>
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <h1 className="text-xs-center">Secretary</h1>
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <h1 className="text-xs-center">Manager</h1>
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <h1 className="text-xs-center">Experienced Member</h1>
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xs-12">
              <h1 className="text-xs-center">Group Leaders</h1>
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

export default connect(mapStateToProps)(Jobs);
