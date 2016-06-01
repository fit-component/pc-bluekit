import * as React from 'react'

export interface PropsInterface {
    /**
     * 标题
     */
    title?: string

    /**
     * 描述
     */
    description?: string

    /**
     * 源码
     */
    codeSource?: string

    /**
     * 实例
     */
    codeInstance?: React.ReactElement<any>

    [x: string]: any
}

export class Props implements PropsInterface {
    codeSource = ''
    description = ''
    codeInstance: any = null
}

export interface StateInterface {
    /**
     * 是否使用原始样式
     * 使用 css 样式初始化
     */
    useOriginStyle?: boolean

    /**
     * 是否显示了代码内容
     * 只要显示过了就一直是true,因为代码高亮非常消耗计算资源,这个字段为了让高亮逻辑仅在展开的第一次执行
     */
    hasShowCode?: boolean

    /**
     * 经过高亮后的代码html片段
     */
    highLightCodeSource?: string
}

export class State implements StateInterface {
    useOriginStyle = false
    hasShowCode = false
}