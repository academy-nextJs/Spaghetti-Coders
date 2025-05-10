export function formatTime(seconds: number) { // this helper func accepts raw seconds value and returns a valid MM:SS time using the ISOString hack
  return new Date(seconds * 1000).toISOString().substring(14, 19);
}