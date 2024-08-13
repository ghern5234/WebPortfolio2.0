import emailImage from '../assets/email.png'
import gitImage from '../assets/git.png'
import linkedInImage from '../assets/linkedin.png'
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
        <div className='flex flex-row mt-20  transition'>
            <a href="mailto:ghern5234@gmail.com"><img src={emailImage} width={200} height={250} className='m-2 z-0 rounded-lg transition-all duration-300 hover:scale-110 '></img></a>
            <Link  to="https://github.com/ghern5234"><img src={gitImage} width={200} height={250} className='m-2 z-0 rounded-lg transition-all duration-300 hover:scale-110'></img></Link>
            <Link h><img src={linkedInImage} width={200} height={250} className='m-2 z-0 rounded-lg transition-all duration-300 hover:scale-110'></img></Link>
        </div>




        </>
    )
}

export default Contact