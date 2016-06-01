import * as React from 'react'
import Bluekit from '../../src'

const info = {
    title: '标题',
    description: '描述',
    codeSource: 'var a = 5;',
    codeInstance: (
        <div>123</div>
    )
}

export default class Demo extends React.Component<any,any> {
    render() {
        return (
            <Bluekit {...info}/>
        )
    }
}