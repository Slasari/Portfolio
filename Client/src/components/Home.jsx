import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import mail from '../assets/mail.svg'

export default function Home (){
    return (<div>
        <h1>Ariel Salcito</h1>
        <h2>Full Stack Developer</h2>
        <h4>agregar descripcion</h4>
        <div>
            <img src={github}></img>
            <span>Github</span>
        </div>
        <div>
            <img src={linkedin}></img>
            <span>Linkedin</span>
        </div>
        <div>
            <img src={mail}></img>
            <span>Email</span>
        </div>
    </div>)
}