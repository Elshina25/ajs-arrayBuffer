export default class ArrayBufferConverter {
    constructor(buffer) {
        this.buffer = null;
    }

    load(funcBuffer) {
        this.buffer = funcBuffer;
    }

    toString() {
        const string = '';
        const bufferView = Uint16Array(this.buffer);
        
        for (let i = 0; i < bufferView.length; i++) {
            string += String.fromCharCode(bufferView[i]);
        }

        return string;
    }
}