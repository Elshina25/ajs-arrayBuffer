export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(funcBuffer) {
    this.buffer = funcBuffer;
  }

  toString() {
    let string = '';
    const bufferView = new Uint16Array(this.buffer);

    for (let i = 0; i < bufferView.length; i += 1) {
      string += String.fromCharCode(bufferView[i]);
    }
    return string;
  }
}
