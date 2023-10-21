
import Header from './Header';
import About from './About';
import Contact from './Contact';
import SkillsTable from './SkillsTable';
import Footer from './Footer';
import Photo from './images/Photo.png'
import Video from './video/Web Development.mp4'

function Profile() {
  return (
    <center>
      <font face="Comic Sans MS" color="white">
        <fieldset style={{ width: '40%' }}>
          <h1>Welcome to my profile!!!</h1>
          <Header/>
          <img src={Photo} alt='Profile'/>
          <About />
          <SkillsTable />
          <video width="320" height="240" controls muted>
                    <source src={Video} type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
          <Contact/>
        </fieldset>
      </font>
      <Footer/>
    </center>
  );
}

export default Profile;
