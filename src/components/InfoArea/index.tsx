import * as C from './styles'
import './Info.css'
import {FormatCurrentMonth} from '../../helpers/dateFilter'
import {ResumeItem} from '../../components/ResumeItem'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;

}

export const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) => {

    let calc = (income - expense); 

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() - 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() + 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    return(
        <C.Container>
            <C.ResumeArea>
                <ResumeItem title="Total" value={calc.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} color={(income - expense) < 0 ? 'red' : 'green'} />
            </C.ResumeArea>
            <C.PaginateNav>
                <select className="Selected">
                    <option>10 por página</option>
                    <option>20 por página</option>
                    <option>30 por página</option>
                </select>
                <span className="Total">Total: 100 resultados</span>
                <ul>
                    <li className="final" onClick={handlePrevMonth}>◀</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li className="finaltwo" onClick={handleNextMonth}>▶</li>
                </ul>
            </C.PaginateNav>
        </C.Container>

    )

}