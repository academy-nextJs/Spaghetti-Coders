export function formatDate( // This helper func accepts the ISO DateString received by the api and converts it into persian date with letter month
  date: string,
  persianDateOption: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }, //default value for the persianDateOption parameter
) {
  return new Date(date).toLocaleDateString('fa-IR', persianDateOption)
}