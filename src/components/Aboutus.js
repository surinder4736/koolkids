import { Link } from 'react-router-dom';
import React from 'react';
import Banner from './Home/Banner';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import koolkids from '../images/member1.png';
import koolkids2 from '../images/member2.png';
import koolkids3 from '../images/member3.png';
import koolkids4 from '../images/member4.png';
import koolkids5 from '../images/member5.png';
import motivation from '../images/mission.png';
import Originpic from '../images/origin.png';
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
              <p className="text-xs-Left">When injustice becomes law, resistance becomes duty!</p>
              <p className="text-xs-Left">Thomas Jefferson</p>
              <p className="text-xs-Left">
              Kool Kids Klub aims to create a world where liberty of people is of prime importance. Along with this, KKK aims to establish a proper system of law and order which not only ensures security but also the freedom of individuals. As we all know, the Illuminati led by Babir Koyal has turned this world into nothing less than a dystopia. With mass surveillance and censorship active in cities, free will of the people has been smashed for the selfish motive of the Illuminati to rule the world. In light of this, KKK aspires to build a world run by the people as a whole for themselves which focuses on betterment of everyone.
              </p>
            </div>
            <div className="col-md-6 col-xs-6">
              <img src={motivation} alt="motivation" width="100%" />
            </div>
          </div>
          <div className="row divsection">
            <div className="col-md-6 col-xs-6">
              <img src={Originpic} alt="origin" width="100%" />
            </div>
            <div className="col-md-6 col-xs-6">
              <h1 className="text-xs-center">Origin</h1>
              <p className="text-xs-Left">
              KKK originated in the basement of the World School of Design on 23rd July, 2027. It was founded by a group of 5 high school seniors. They were normal students. What separated them from the rest of the world was their determination to fight evil.
              </p>
            </div>
          </div>
          {/* <div className="row divsection" >
            <div className="col-md-12 col-xs-12">
              <h1 className="text-xs-center">Current Members</h1>
              
            </div>
          </div> */}
          <div className="row divsection">
            <div className="col-md-12 col-xs-12 text-xs-center">
            <h1 className="text-xs-center">Current Members</h1>
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

                <div className="mySlides fade">
                  <img src={koolkids4} />
                </div>

                <div className="mySlides fade">
                  <img src={koolkids5} />
                </div>

                {/* <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a> */}
              </div>
              <br />
              <div className="text-center">
                <span className="member">Mahendra Nodi <br /> (President) (Interest in Pol Sci)</span> 
                <span className="member">Gill Bates  <br /> (President) (Interest in Economics)</span> 
                <span className="member">Amesh Mukbani  <br /> (Vice President) (Interest in IT)</span>
                <span className="member">Cillary Hilton  <br /> (Chief Advisor) (Interest in Business Management)</span> 
                <span className="member">Mack Ja   <br /> (Treasurer) (Interest in Finance)</span>  
              </div>
              <br />
              <div className="text-center">
                <span className="dot"></span> 
                <span className="dot"></span> 
                <span className="dot"></span> 
                <span className="dot"></span> 
                <span className="dot"></span> 
              </div>
              <br />
              <br/>
              <div className="text-center">
                <p>Current membership : 50 (names)</p>
              </div>
              <div className="text-center">
                <p>Our people are a group of diverse people who despite having different backgrounds, have one common goal.</p>
              </div>
            </div>
          </div>
          <div className="row divsection">
            <div className="col-md-6 col-xs-6">
              <h1 className="text-xs-center">Mission and Vision</h1>
              <p className="text-xs-Left">
              Our mission is to defeat the Illuminati and regain our rightly-deserved freedom.
Vision is to reconstruct this world from its ruins to the best it has ever been- where fear,supremacy,discrimination,dictatorship don’t exist : where only camaraderie,teamspirit,compassion,liberty flourish/blossom. Where every individual is a free thinker and change-maker and above all a responsible citizen.

              </p>
            </div>
            <div className="col-md-6 col-xs-6">
              <img src={mission} alt="mission and origin" width="100%" />
            </div>
          </div>
          <div className="row divsection">
            <div className="col-md-6 col-xs-6">
              <img src={todo} alt="todo" width="100%" />
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
