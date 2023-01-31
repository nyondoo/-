import { useState } from "react"
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"

export default function WorkDatePick() {
  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  const [values, setValues] = useState([today, tomorrow])

  return (
    <DatePicker
    multiple
    onChange={array => { //Array of Dateobjecs
        array.push(values)
        console.log(array)
    }}
    />
  )
}
