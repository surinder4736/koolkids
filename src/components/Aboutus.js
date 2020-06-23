import { Link } from 'react-router-dom';
import React from 'react';
import Banner from './Home/Banner';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import koolkids from '../images/koolkids.jpg';
import koolkids2 from '../images/koolkids2.jpg';
import koolkids3 from '../images/koolkids3.jpg';
import motivation from '../images/motivation.jpg';
import Originpic from '../images/origin.jpg';
import mission from '../images/mission.jpg';
import todo from '../images/caartoon.gif'
let slideIndex=0;
const mapStateToProps = state => ({ ...state.auth,
    appName: state.common.appName,
    token: state.common.token });

class Aboutus extends React.Component {
  constructor() {
    super();
    
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
      var members = document.getElementsByClassName("member");
      if(slides.length>0 && members.length>0){
        
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (j = 0; j < members.length; j++) {
          members[j].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block"; 
        dots[slideIndex-1].className += " active";
        members[slideIndex-1].style.display = "block";  
      }
    }, 2000);
  }

  render() {
    return (
      <div className="about-page">
        
        <Banner token={this.props.token} appName={this.props.appName} />
        <div className="container page">
          <div className="row divsection">
            <div className="col-md-6 col-xs-6">
              <h1 className="text-xs-center">Motivation</h1>
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
            <div className="col-md-6 col-xs-6">
              <img src={motivation} alt="motivation" />
            </div>
          </div>
          <div className="row divsection">
            <div className="col-md-6 col-xs-6">
              <img src={Originpic} alt="origin" />
            </div>
            <div className="col-md-6 col-xs-6">
              <h1 className="text-xs-center">Origin</h1>
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
          </div>
          <div className="row divsection" >
            <div className="col-md-12 col-xs-12">
              <h1 className="text-xs-center">Current Members</h1>
              
            </div>
          </div>
          <div className="row divsection">
            <div className="col-md-12 col-xs-12 text-xs-center">
              <div className="slideshow-container">
                <div className="mySlides fade">
                  <img src={koolkids} />
                </div>

                <div className="mySlides fade">
                  <img src={koolkids2} />
                </div>

                <div className="mySlides fade">
                  <img src={koolkids3} />
                </div>

                {/* <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a> */}
              </div>
              <br />
              <div className="text-center">
                <span className="member">Surinder Kumar <br /> Software</span> 
                <span className="member">Munna Kumar <br /> Software</span> 
                <span className="member">Anish Kumar <br /> Software</span> 
              </div>
              <br />
              <div className="text-center">
                <span className="dot"></span> 
                <span className="dot"></span> 
                <span className="dot"></span> 
              </div>
            </div>
          </div>
          <div className="row divsection">
            <div className="col-md-6 col-xs-6">
              <h1 className="text-xs-center">Mission and Vision</h1>
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
            <div className="col-md-6 col-xs-6">
              <img src={mission} alt="mission and origin" />
            </div>
          </div>
          <div className="row divsection">
            <div className="col-md-6 col-xs-6">
              <img src={todo} alt="todo" />
            </div>
            <div className="col-md-6 col-xs-6">
              <h1 className="text-xs-center">TODO</h1>
              <p className="text-xs-Left">
              the kool kids klub is a very nice klub where all the pure people go.like the rich people go to the camps and the poor people go to the ghettos. The poor people who become rich go to the rap industry. and the pure people go to the kool kids klub. Most of the time the people in the klub make nice campfires out of cute crosses and they wear this adorable white robe. The most pure person wears red because that shows he is the most important.Lots of people should join the klub its very nice. We are also known as the kkk .
              </p>
            </div>
          </div>
          <div className="row divsection">
            <div className="col-md-12 col-xs-12">
              <h3 className="text-xs-center">Why you should join it <Link to="/perks" className="nav-link">Perks</Link></h3>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Aboutus);
