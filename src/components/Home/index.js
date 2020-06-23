import Footer from '../Footer';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../constants/actionTypes';
import koolkids from '../../images/homekoolkids.jpg';
import koolkids2 from '../../images/homekoolkids2.jpg';
import koolkids3 from '../../images/homwkoolkids3.jpg';
import koolkids4 from '../../images/homekoolkids4.jpg';
// import koolkids5 from '../../images/homekoolkids5.jpg';

import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import instagram from '../../images/instagram.jpg';
import { Link } from 'react-router-dom';
const Promise = global.Promise;
let homeslideIndex=0;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
  componentWillMount() {
    const tab = this.props.token ? 'feed' : 'all';
    const articlesPromise = this.props.token ?
      agent.Articles.feed :
      agent.Articles.all;

    this.props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }
  componentDidMount(){
    this.showSlides();
  }

  showSlides(){
    setInterval(function(){ 
      var i;
      var j;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if(slides.length>0){
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        homeslideIndex++;
        if (homeslideIndex > slides.length) {homeslideIndex = 1}
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[homeslideIndex-1].style.display = "block"; 
        dots[homeslideIndex-1].className += " active";
      }
    }, 2000);
  }


  render() {
    return (
      <div className="home-page">
        <div className="slideshow-container">
          <div className="mySlides fade">
            <img src={koolkids} style={{width:'100%'}} />
          </div>

          <div className="mySlides fade">
            <img src={koolkids2} style={{width:'100%'}} />
          </div>

          <div className="mySlides fade">
            <img src={koolkids3} style={{width:'100%'}}/>
          </div>
          <div className="mySlides fade">
            <img src={koolkids4} style={{width:'100%'}} />
          </div>

          {/* <div className="mySlides fade">
            <img src={koolkids5} style={{width:'100%'}}/>
          </div> */}
        </div>
              
        <br />
        <div style={{textAlign:'center'}}>
          <span className="dot"></span> 
          <span className="dot"></span> 
          <span className="dot"></span> 
          <span className="dot"></span> 
          {/* <span className="dot"></span>  */}
        </div>
        <div className="container page">
        <div className="row social-links" style={{marginLeft:'0px', marginRight:'0px'}}>
          <div className="col-xs-4" style={{margin:'auto'}}>
            <ul className="nav navbar-nav ">
              <li className="nav-item">
                <img src={facebook} alt="facebook" />
              </li>
              <li className="nav-item">
                <img src={twitter} alt="twitter" />
              </li>
              <li className="nav-item">
                <img src={instagram} alt="instagram" />
              </li>
            </ul>
          </div>
        </div>
        <div className="sitemap">
          <h1>SITE MAP</h1>
        </div>
        <div className="sitemap-content">
          <p className="text-xs-center">
            he kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
          </p>
        </div>
        <div className="contact-detail">
          <h1>Contact-Us</h1>
          <p>Email Us: <u>teamsupport@test.com</u></p>
          <p>Mobile : 00999887766</p>
        </div>
        </div>  
        
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
