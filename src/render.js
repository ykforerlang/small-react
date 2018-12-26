

export default function render(vnode, parentDOM) {
    if (vnode === undefined || vnode === null || typeof vnode === 'boolean') {
        return
    }

    if (typeof vnode === 'string') {
        const dom = document.createTextNode(vnode)
        parentDOM.appendChild(dom)
    } else if (typeof vnode.nodeName === 'string') {
        const dom = document.createElement(vnode.nodeName)
        for(let i = 0; i < vnode.children.length; i++) {
            const item = vnode.children[i]
            render(item, dom)
        }
        parentDOM.appendChild(dom)
    } else if (typeof vnode.nodeName === "function") {
        const inst = new vnode.nodeName()
        const subVnode = inst.render()

        render(subVnode, parentDOM)
    }

}