export default function punctuate(length, index) {
  switch (length - index) {
    case 1:
      return ".";
    case 2:
      return " & ";
    default:
      return ", ";
  }
}
