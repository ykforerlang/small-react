
export default function createElement(nodeName, props = {}, children) {

    const {key, ...otherProps} = props || {}

    return {
        nodeName,
        key,
        props: otherProps,
        children
    }
}