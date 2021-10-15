import * as C from './styles'
import './Header.css'
import logo from '../images/bys.png'
import people from '../images/people.png'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'


export const HeaderArea = () => {

    return(
        <>
        <a className="HeaderLink" href="#">COBRANÇAS RECEBIDAS</a>
        <C.Container>
            <img src={logo} width={120}/>
        <C.SecondContainer>
            <span className="User">Alexandre Saints</span>
            <span className="CPF" >387    ***    ***    **</span>
            <MdOutlineKeyboardArrowDown className="Icon"/>
        <img src={people} className="People" width={30}/>
        </C.SecondContainer>
        </C.Container>
        </>
    )
}