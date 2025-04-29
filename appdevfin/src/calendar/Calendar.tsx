import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  setDate,
  startOfMonth,
  sub,
} from "date-fns";
import Cell from "./Cell";
import Modal from "./Modal";
import { useState } from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar({ value, onChange }: { value: Date; onChange: any }) {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const [openModal, setOpenModal] = useState<boolean>(false);

  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  const prevMonth = () => onChange(sub(value, { months: 1 }));
  const nextMonth = () => onChange(add(value, { months: 1 }));
  const prevYear = () => onChange(sub(value, { years: 1 }));
  const nextYear = () => onChange(add(value, { years: 1 }));
  const handleSetToday = () => onChange(new Date())

  const handleClickDate = (index: number) => {
    const date = setDate(value, index);
    onChange && onChange(date);
    setOpenModal(true);
  };

  console.log(startDate);
  console.log(numDays);

  return (
    <div>
      <div
        onChange={onChange}
        style={{ width: "95vw", height: "80vh", marginTop: "7.5rem" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Cell onClick={prevYear} style={{}}>
            {"<<"}
          </Cell>
          <Cell onClick={prevMonth} style={{ cursor: "pointer" }}>
            {"<"}
          </Cell>
          <Cell onClick={handleSetToday} style={{ fontSize: "1.5rem", gridColumn: "span 3", cursor: "pointer" }}>
            {format(value, "LLLL yyyy")}
          </Cell>
          <Cell onClick={nextMonth} style={{ cursor: "pointer" }}>
            {">"}
          </Cell>
          <Cell onClick={nextYear} style={{ cursor: "pointer" }}>
            {">>"}
          </Cell>

          {daysOfWeek.map((day) => (
            <Cell
              key={day}
              style={{
                fontSize: "1.25rem",
                lineHeight: "1.5",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              {day}
            </Cell>
          ))}

          {Array.from({ length: prefixDays }).map((_, index) => (
            <Cell key={index}></Cell>
          ))}

          {Array.from({ length: numDays }).map((_, index) => {
            const date = index + 1;

            return (
              <Cell
                onClick={() => handleClickDate(index + 1)}
                key={date}
                style={{ fontSize: "1.25rem", cursor: "pointer" }}
              >
                {date}
              </Cell>
            );
          })}

          {Array.from({ length: suffixDays }).map((_, index) => (
            <Cell key={index}></Cell>
          ))}
        </div>
      </div>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          Selected Date: {format(value, "dd LLLL yyyy")}
        </Modal>
      )}
    </div>
  );
}

export default Calendar;
