import moment from "moment";

export const randomUUID = () => {
  return (
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1) +
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  );
};

export const subtaskTicket = () => {
  return (
    "#" +
    Math.floor((1 + Math.random()) * 0x1000)
      .toString(16)
      .substring(1) +
    Math.floor((1 + Math.random()) * 0x1000)
      .toString(16)
      .substring(1)
  );
};

export const dateFormat = date => {
  return moment(date).format("MMMM Do, h:mm a");
};

export const onlyDate = date => {
  return moment(date).format("MMM Do");
};

export const datesWithYear = date => {
  return moment(date).format("MMM Do YYYY");
};

export const addZeroes = (num) => {
  const dec = String(num).split('.')[1]
  const len = dec && dec.length > 2 ? dec.length : 2
  return Number(num).toFixed(len)
};