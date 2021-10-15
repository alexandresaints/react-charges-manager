import * as C from './styles'
import {Item} from '../../types/Item'
import {TableItem} from '../TableItem'
import {RiArrowUpDownFill} from 'react-icons/ri'
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import './Area.css'

type Props = {
    list: Item[]
}

export const TableArea = ({list}: Props) =>{

    return (
        <>
        
        <C.Container>
            <span className='Back'> <MdOutlineArrowBackIosNew/> VOLTAR</span>
        <br></br><br></br>
            <C.TitleContainer>
                <C.Title>
                    Relação de Cobranças Recebidas
                <C.DateInfo>
                    De 06/10/2021 Até 21/11/2021
                </C.DateInfo>
                </C.Title>
                <C.Search>
                    <C.Form>
                        <input type='text' placeholder=' Buscar' className="InputTxt"></input>
                        <select>
                            <option>7 dias</option>
                            <option>8 dias</option>
                            <option>9 dias</option>
                        </select>
                        <span className="Until">De</span>
                        <input type='date' className="InputDate" value="2020-06-01"></input>
                        <span className="Until">Até</span>
                        <input type='date' className="InputDate" value="2020-06-01"></input>
                    </C.Form>
                </C.Search>
            </C.TitleContainer>

            <nav>
                <a href="#">Todas as cobranças</a>
                <a href="#">Pendentes</a>
                <a href="#">Pagas</a>
            </nav>
            <hr></hr>
            <C.Table>
                <thead>
                    <tr>
                        <C.TableHeadColumn><RiArrowUpDownFill/> Vencimento</C.TableHeadColumn>
                        <C.TableHeadColumn><RiArrowUpDownFill/> Nome do Beneficiário</C.TableHeadColumn>
                        <C.TableHeadColumn><RiArrowUpDownFill/> Valor</C.TableHeadColumn>
                        <C.TableHeadColumn>Situação</C.TableHeadColumn>
                        <C.TableHeadColumn>Opções</C.TableHeadColumn>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <TableItem key={index} item={item}/>
                    ))}
                </tbody>
            </C.Table>
        </C.Container>
        </>
    )
}