import axios from "axios"
import { useState } from "react"
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import { ElementFlags } from "typescript"

export default function WorkDatePick() {
  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  const [values, setValues] = useState([]);
  const workedDays = [];

  return (
    <>
        <DatePicker 
        multiple
        value={values} 
        onChange={setValues}
        />
        <button onClick={() => {
            values.map((el) => {
                workedDays.push({
                day: el.day,
                month: el.month.number,
                year: el.year
            })
        })
        axios({
            url: 'http://localhost:8080/workday',
            method: 'post',
            data: {
                workedDays: workedDays
            }
        })
        }} />
    </>

  )
}
