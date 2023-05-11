/**
 * 根据传入的文字计算字节长度
 * @param {string} contnet 文字内容
 */
export default function (contnet) {
  let total = 0;
  //   for (let i = 0, len = contnet.length; i < len; i++) { // eslint-disable-line no-plus
  for (let i = 0, len = contnet.length; i < len; i++) {
    if (content[i].charCodeAt() > 255) {
      total += 2; //2 bytes per char, so add 2 bytes per char.
    } else {
      total++;
    }
  }
  return total;
}
