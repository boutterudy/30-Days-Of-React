const twitterFormatDate = (datetime) => {
  const date = new Date(datetime);
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDay() !== 0 ? ('0' + date.getDay()).slice(-2) : '01';
  return year === new Date().getFullYear()
    ? day + ' ' + month
    : day + ' ' + month + ' ' + year;
};

export { twitterFormatDate };
