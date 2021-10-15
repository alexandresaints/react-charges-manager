import {useState, useEffect} from 'react'
import * as C from './App.styles'
import {Item} from './types/Item'
import {Category} from './types/Category'
import {categories} from './data/categories'
import {items} from './data/items'
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'
import { ResumeItem } from './components/ResumeItem'
import { HeaderArea } from './components/HeaderArea'
import { RightArea } from './components/RightArea'

const App = () =>{
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() =>{
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(() =>{
    let incomeCount = 0
    let expenseCount = 0

    for (let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount)

  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: Item) =>{
    let newList =[...list];
    newList.push(item)
    setList(newList)
  }

  return (
    <>
    <C.All>
      <C.MainContainer>
      <C.Container>
        
          <C.HeaderText>Cadastro de Cobranças</C.HeaderText>
          <HeaderArea />
        <C.Body>
            <TableArea list={filteredList}/>

            <InfoArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
              />

        </C.Body>
      </C.Container>
      </C.MainContainer>
      <C.RightContainer>
        <C.RightBox>
          <RightArea />
        </C.RightBox>
      </C.RightContainer>
    </C.All>
    </>
  );
}

export default App