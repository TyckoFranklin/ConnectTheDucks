import * as SHARED from '../../shared/actions'


export default class Clipboard {

    constructor(parameters){
        const { store, port } = parameters
        this.store = store;
        window.addEventListener("copy", (event)=>{
            const text = document.getSelection().toString();
            let clipboardMsg = {
                action: SHARED.ADD_CLIPBOARD_ITEM,
                content: {
                    text,
                }
            };
            port.postMessage(clipboardMsg);
        })
    }
}