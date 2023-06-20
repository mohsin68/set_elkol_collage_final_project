export default (number) => {
    if (number > 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number > 100000) {
      return (number / 1000).toFixed(0) + "K";
    } else if (number > 10000) {
      return (number / 1000).toFixed(1) + "K";
    } else if (number > 1000) {
      return (number / 1000).toFixed(0) + "K";
    } else {
      return number;
    }
}
