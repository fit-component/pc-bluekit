/// <reference path="../../../../../typings-module/react-highlight.d.ts" />
/// <reference path="../../../../../typings-module/marked.d.ts" />

import * as React from 'react'
import * as classNames from 'classnames'
import * as module from './module'
import * as Highlight from 'react-highlight'
import * as marked from 'marked'
import {Collapse, CollPanel} from '../../../collapse/src'
import Switch from '../../../switch/src'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

export default class bluekit extends React.Component <module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()

    toggleUseOriginStyle() {
        this.setState({
            cleanStyle: !this.state.cleanStyle
        })
    }

    handleShowCode() {
        if (this.state.hasShowCode === true)return
        this.setState({
            hasShowCode: true
        }, ()=> {
            this.setState({
                highLightCodeSource: (
                    <Highlight>{this.props.codeSource}</Highlight>
                )
            })
        })
    }

    render() {
        const classes = classNames({
            '_namespace': true,
            [this.props['className']]: !!this.props['className']
        })

        const rightToolsClassName = classNames({
            'right-tools': true,
            'right-tools-active': !this.state.cleanStyle
        })

        const exampleContainerClassName = classNames({
            'example-container-box': true,
            'reset': this.state.cleanStyle
        })

        return (
            <div {...others(new module.Props(), this.props)}
                className={classes}>
                <div className="demo-title">
                    {this.props.title}
                    <div className={rightToolsClassName}>原始样式 <Switch onChange={this.toggleUseOriginStyle.bind(this)}/>
                    </div>
                </div>
                <div className="code-container">
                    <div className="example-container">
                        <div className={exampleContainerClassName}>
                            {this.props.codeInstance}
                        </div>
                    </div>
                    <div className="code custom">
                        <Collapse onChange={this.handleShowCode.bind(this)}>
                            <CollPanel style={{padding:'0 10px'}}
                                       header="源码">
                                <div className="description"
                                     dangerouslySetInnerHTML={{__html: marked(this.props.description)}}></div>
                                {this.state.highLightCodeSource}
                            </CollPanel>
                        </Collapse>
                    </div>
                </div>
            </div>
        )
    }
}