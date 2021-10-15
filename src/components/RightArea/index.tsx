import * as C from './styles'
import people from '../images/people.png'
import {ImExit} from 'react-icons/im'
import  './Box.css'

export const RightArea = () => {
    return(
        <>
        <C.Container>
            <img src={people} width={60}/>
            <C.Usuario>Alexandre
            <C.CPF>387 *** *** **</C.CPF>
            </C.Usuario>
        </C.Container>

        <form>
            <span className="scd-spn">MEU PERFIL</span>
            <span className="scd-spn-two">ALTERAR SENHA</span>
        </form>
        
        <C.Div>
            <span className="exit-spn">SAIR</span>
            <ImExit/>
        </C.Div>
    </>
    )
}