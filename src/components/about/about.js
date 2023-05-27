import './about.css';
import me from '../../assets/Me.png';


function About() {
    return ( 
        <section className='about'>
            <div className='about-img'>
                <img src={me}/>
            </div>
            <div className='about-txt'>
                <h2>About Me</h2>
                <h4>This is demo</h4>
                <p>"Be strong enough to be gentle"</p>
            </div>
        </section>
     );
}

export default About;