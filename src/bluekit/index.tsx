/// <reference path="../../../../../typings-module/rc-animate.d.ts" />

import * as React from 'react'
import * as classNames from 'classnames'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

export default class bluekit extends React.Component<module.PropsInterface,module.StateInterface> {
    static defaultProps = new module.Props()
    public state = new module.State()

    render() {
        const classes = classNames({
            '_namespace': true,
            [this.props['className']]: !!this.props['className']
        })

        return (
            <div {...others(new module.Props(), this.props)}
                className={classes}>
               123
            </div>
        )
    }
}