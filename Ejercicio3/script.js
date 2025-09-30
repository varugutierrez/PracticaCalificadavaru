const monthYear = document.getElementById('month-year');
const calendarDates = document.getElementById('calendar-dates');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let fechaActual = new Date();
let mesActual = fechaActual.getMonth();
let añoActual = fechaActual.getFullYear();

function renderCalendar(mes, año) {

  calendarDates.innerHTML = '';

  const primerDia = new Date(año, mes, 1).getDay();
  const diasEnMes = new Date(año, mes + 1, 0).getDate();

  // Rellenar espacios en blanco antes del primer día
  for (let i = 0; i < primerDia; i++) {
    calendarDates.innerHTML += <div></div>;
  }

  // Insertar días del mes
  for (let dia = 1; dia <= diasEnMes; dia++) {
    let esHoy =
      dia === new Date().getDate() &&
      mes === new Date().getMonth() &&
      año === new Date().getFullYear();
    calendarDates.innerHTML += <div class="${esHoy ? 'today' : ''}">${dia}</div>;
  }
}

prevMonthBtn.onclick = function() {
  mesActual--;
  if (mesActual < 0) {
    mesActual = 11;
    añoActual--;
  }
  renderCalendar(mesActual, añoActual);
};

nextMonthBtn.onclick = function() {
  mesActual++;
  if (mesActual > 11) {
    mesActual = 0;
    añoActual++;
  }
  renderCalendar(mesActual, añoActual);
};

renderCalendar(mesActual, añoActual);