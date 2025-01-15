const dateFormatter = (date) => {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
};

export default dateFormatter;
