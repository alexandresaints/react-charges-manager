import * as C from './styles'
import {Item} from '../../types/Item'
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'
import {ImPrinter} from 'react-icons/im'
import {AiOutlinePaperClip} from 'react-icons/ai'

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {

    return (

        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>

            <C.TableColumn>{item.title}</C.TableColumn>

            <C.TableColumn>{item.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</C.TableColumn>

            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                {categories[item.category].title}
                </C.Category>
            </C.TableColumn>

            <C.TableColumn>
                <ImPrinter font-size={17}/> <AiOutlinePaperClip font-size={17}/>
            </C.TableColumn>
        </C.TableLine>

    )

}