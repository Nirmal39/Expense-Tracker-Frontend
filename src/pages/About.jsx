import React from 'react'
import styled from 'styled-components'
import Reveal from '../utils/Reveal'
import profile from '../assets/1476.jpg'

const skills = [
  "React", "Redux" , "NodeJs","Express" ,"MongoDB","Firebase","JavaScript","Python"
]

const StyledMain = styled.div`
padding-top: 100px;
display: flex;
justify-content: center;
align-items: center;
background-color: #101522;
color: lightgrey;
`

const StyledAboutSection = styled.section`
max-width: 900px;
height: 100vh;

.inner{
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 50px;

  @media (max-width: 768px){
    display: block;
  }
}
`
const StyledText = styled.div`
p{
  margin: 0 0 20px 0;
}
ul.skills-list{
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  grid-gap: 0 8px;
  padding: 0;
  margin: 20px 0 0 0;
  overflow: hidden;
  list-style: none;
  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--green);
      font-size: var(--fz-sm);
      line-height: 12px;
    }
  }
}
`
const StyledPic = styled.div`
  position: relative;
  max-width: 250px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus-visible {
      box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
    }
    display: block;
    position: relative;
    width: 100%;
    border-radius: 4px;
    background-color: #64ffda;

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: 4px;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: #0a192f;
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid #64ffda;
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;


function About() {
  return (
    <StyledMain>
    <StyledAboutSection id="about">
      <Reveal>
      <h2 style={{paddingBottom: "40px", color: "grey", fontSize: "35px", fontWeight: "700"}} className='numbered-heading'>About Me</h2>
      </Reveal>
      <div className="inner">
        <StyledText>
          <div>
          <Reveal>
          <p>
            Hello! My name is Nirmal and i enjoy doing stuffs that
            facinates me towards building something that can be used by 
            people for solving problems of day to day life like {''}<a>Income and Expense Tracker</a>
            ,{''}<a>Chat Application</a> and to learn how Api Works by creating applications like
            a {''}<a>E-commerce Application</a> and <a>Spotify Clone</a>
          </p>
          </Reveal>
          <Reveal>
          <p>
            I am from Odisha and i completed my whole 22 year studying there and enjoy 
            my childhood and now trying to make my livelyhood in Tech and i also have a goal to teach
            people about tech someday.
          </p>
          </Reveal>

          <Reveal>
          <p>Here are a few technologies I’ve been working with recently:</p>
          </Reveal>
        </div>
        <Reveal>
        <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
          </Reveal>
        </StyledText>
        <StyledPic>
          <div className='wrapper'>
            <Reveal>
              <img 
              className='img'
              src={profile} 
              alt="profileImage"
              style={{width:"250px"}} />
            </Reveal>
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
    </StyledMain>
  )
}

export default About