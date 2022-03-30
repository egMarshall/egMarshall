import { FooterDiv, ContactDiv } from "./styled"
import email from "../../images/email.png"
import linkedin from "../../images/linkedin.png"
import github from "../../images/github.png"

const Footer = () => {
    return <FooterDiv>
        <p>Desafio Técnico Kukac Fullstack Trainee - Érico Marshall</p>
        <p>Contato:</p>
        <ContactDiv>
            <a 
                href="https://github.com/egMarshall" 
                target="blank">
                    <img 
                        src={github}
                    /> 
                <p>Github</p>
            </a>
            <a 
                href="https://www.linkedin.com/feed/" 
                target="blank">
                    <img 
                        src={linkedin}
                    /> 
                <p>Linkedin</p>
            </a>
            <a 
                href="mailto:ericogmarshall1@gmail.com" 
                target="blank">
                    <img 
                        src={email} 
                    /> 
                <p>e-mail</p>
            </a>
        </ContactDiv>
    </FooterDiv>
}

export default Footer