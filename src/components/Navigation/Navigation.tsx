import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Nav } from "../../styles/Navigation";
function Navigation() {
  return (
    <Nav>
      <Link to="/">Начало бронирования</Link>
      <Link to="/contract">Подписание договора</Link>
      <Link to="/subscription">Ожидание подписи</Link>
      <Link to="/pay">Оплатить</Link>
      <Link to="/negative_declined">Негативный (подписание отменено)</Link>
      <Link to="/negative_rented">Негативный (уже забронирован)</Link>
      <Link to="/booking">Объект забронирован</Link>
      <Link to="/dduorm">Объект забронирован (форма)</Link>
      <Link to="/doc_check">Подписание договора ДДУ и Акт</Link>
      <Link to="/waiting_builder">Ожидание подписи застройщика</Link>
      <Link to="/success">Подписание договора (финал)</Link>
    </Nav>
  );
}

export default Navigation;

