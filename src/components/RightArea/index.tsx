import * as C from './styles'
import people from '../images/people.png'
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
        <label>
            <span>MEU PERFIL</span>
            <input type="text" name="name" className="Input" />
        </label>
        <label>
            <span className="scd-spn">ALTERAR SENHA</span>
            <input type="passoword" name="name" className="Input" />
        </label>
        </form>
    </>
    )
}