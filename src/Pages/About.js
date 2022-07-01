import React from 'react'
import './about.css'
import girly from '../images/girly.gif'
const About = () => {
  return (
        <div class="aboutall row align-items-center content">
          <div class="about-gif col-md-6 order-1 order-md-2">
              <img src={girly} class="logoabout img-fluid" alt=""/>
          </div>
          <div class="about-txt col-md-6 text-center order-1 order-md-2">
              <h1 className='heading'>About</h1>
              <p>Hi Everyone!</p>
              <p>This is ConnectAll, a community website.</p>
              <p>In today's world mental problems </p>
              <p>like stress, depression and anxiety are neglected </p>
              <p>However due to the covid-19 pandemic such problems have grown</p>
              <p>Especially among students</p>
              <p>Our sole purpose is to create a safe space to share your problems and help you deal with them</p>
              <p>Be it anxiety, depression or stress.</p>
              <p>We protect from negative influence by using an abusive word detector</p>
              <p>The community space allows users to post, comment, upvote or downvote</p>
              <p>We also feature an S.O.S. emergency button</p>
              <p>Which gives you emergency helpline numbers</p>
              <p>Based on your current location.</p>
              <p>We also provide you with contact of therapists</p>
              <p>Near you.</p>
          </div>
        </div>
  )
}

export default About