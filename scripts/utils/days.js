export function isWeekend(date) {
  return date.format('dddd') === 'Sunday' || date.format('dddd') === 'Saturday'
}

export default isWeekend;