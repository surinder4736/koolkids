import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOADED
} from '../constants/actionTypes';
import Footer from './Footer';
import Axios from 'axios';
var qs = require('querystring');

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  
  onChangeName: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'username', value }),
  onChangeSchool: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'school', value }),
  onChangeAge: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'age', value }),
  onChangeAnswer: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'answer', value }),
  onChangeAnswerTwo: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'answertwo', value }),
  onChangeAnswerThree: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'answerthree', value }),
  onChangeAddress: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'address', value }),
  onChangeContact: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'contact', value }),        
  onSubmit: (username, school, age,answer,answertwo,answerthree,address,contact) => {
    const payload = agent.Auth.register(username, school, age,answer,answertwo,answerthree,address,contact);
    dispatch({ type: REGISTER, payload })
  },
  onUnload: () =>
    dispatch({ type: REGISTER_PAGE_UNLOADED })
});

class ApplyForm extends React.Component {
  constructor() {
    super();
    this.changeUsername = ev => this.props.onChangeName(ev.target.value);
    this.changeSchool = ev => this.props.onChangeSchool(ev.target.value);
    this.changeAge = ev => this.props.onChangeAge(ev.target.value);
    this.changeAnswer = ev => this.props.onChangeAnswer(ev.target.value);
    this.changeAnswerTwo = ev => this.props.onChangeAnswerTwo(ev.target.value);
    this.changeAnswerThree = ev => this.props.onChangeAnswerThree(ev.target.value);
    this.changeAddress = ev => this.props.onChangeAddress(ev.target.value);
    this.changeContact = ev => this.props.onChangeContact(ev.target.value);
    this.submitForm = (username, school, age,answer,answertwo,answerthree,address,contact) => ev => {
      ev.preventDefault();
      let data={name:username,school:school,age:age,answer1:answer,answer2:answertwo,answer3:answerthree,user_address:address,contact:contact};
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      Axios.post('http://localhost:5000/customers/add',qs.stringify(data),config).then(res=>{
        console.log(res);
        if(res.status==200){
          alert('data save successfully');
        }
      })
    }
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const school = this.props.school;
    const age = this.props.age;
    const username = this.props.username;
    const answer=this.props.answer;
    const answertwo=this.props.answertwo;
    const answerthree=this.props.answerthree;
    const address=this.props.address;
    const contact=this.props.contact;

    return (
      <div className="form-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Application Form</h1>
              <ListErrors errors={this.props.errors} />
              <form className="forms" onSubmit={this.submitForm(username, school,age,answer,answertwo,answerthree,address,contact)}>
                <fieldset>
                  <label for="txtname"><b>Name :</b> </label>  
                  <fieldset className="form-group">
                    <input id="txtname"
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Name"
                      value={this.props.username}
                      onChange={this.changeUsername} />
                  </fieldset>
                <label for="txtschool"><b>School :</b> </label>
                  <fieldset className="form-group">
                    <input id="txtschool"
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="School"
                      value={this.props.school}
                      onChange={this.changeSchool} />
                  </fieldset>
                  <label for="txtage"><b>Age :</b> </label>
                  <fieldset className="form-group">
                    <input id="txtage"
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Age"
                      value={this.props.age}
                      onChange={this.changeAge} />
                  </fieldset>
                  <label for="txtquestion1"><b>Why do you want to join?</b> </label>
                  <fieldset className="form-group">
                    <input id="txtquestion1"
                      className="form-control form-control-lg"
                      type="text"
                      value={this.props.answer}
                      onChange={this.changeAnswer} />
                  </fieldset>
                  <label for="txtquestion2"><b>How will you contribute?</b> </label>
                  <fieldset className="form-group">
                    <input id="txtquestion2"
                      className="form-control form-control-lg"
                      type="text"
                      value={this.props.answertwo}
                      onChange={this.changeAnswerTwo} />
                  </fieldset>
                  <label for="txtquestion3"><b>Do you wish to apply for a position. If so which and why?</b> </label>
                  <fieldset className="form-group">
                    <input id="txtquestion3"
                      className="form-control form-control-lg"
                      type="text"
                      value={this.props.answerthree}
                      onChange={this.changeAnswerThree} />
                  </fieldset>
                  <label for="txtAddress"><b>Addess :</b> </label>
                  <fieldset className="form-group">
                    <input id="txtAddress"
                     placeholder="Address"
                      className="form-control form-control-lg"
                      type="text"
                      value={this.props.address}
                      onChange={this.changeAddress} />
                  </fieldset>
                  <label for="txtContact"><b>Contact Number :</b> </label>
                  <fieldset className="form-group">
                    <input id="txtContact"
                     placeholder="Contact Mobile"
                      className="form-control form-control-lg"
                      type="text"
                      value={this.props.contact}
                      onChange={this.changeContact} />
                  </fieldset>
                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}>
                    Sign up
                  </button>

                </fieldset>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyForm);
