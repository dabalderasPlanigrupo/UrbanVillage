const GetFormatDate = (e: string) => {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  const objDate = new Date(e);
  const month = months[objDate.getMonth()];
  const day = objDate.getUTCDate();
  const year = objDate.getFullYear();
  const newdate = day + ' ' + month + ' ' + year;

  return newdate;
};

export default GetFormatDate;
