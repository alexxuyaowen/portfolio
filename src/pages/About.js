import ProfilePic from '../assets/profile.JPG';

const About = () => (
  <div className='about'>
    <img src={ProfilePic} alt='Profile' />
    <p>
      An UC Berkeley new grad majored in Computer Science, with specialization
      in React, HTML, CSS, and JavaScript with TypeScript, alongside with Redux,
      RESTful API, Material UI, Bootstrap. Experienced in writing unit tests
      using jest and react testing library. Having a solid knowledge of node,
      express and SQL. Able to quickly adapt to new technologies as well as
      effectively communicate and collaborate in a team setting.
    </p>
  </div>
);

export default About;
