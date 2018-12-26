import {createElement, render} from '../../../src/index'

class A  {

    render() {
        return <div>Hello World</div>
    }
}

render(<A/>, document.body)