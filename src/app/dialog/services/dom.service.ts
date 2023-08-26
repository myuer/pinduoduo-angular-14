import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector, Type } from '@angular/core';

export interface DialogPos {
    top: string;
    left: string;
    width: string;
    height: string;
}

export interface ChildConfig {
    inputs: object,
    outputs: object,
    position?: DialogPos;
}

@Injectable({
    providedIn: 'root'
})
export class DomService {
    private childComponentRef: ComponentRef<any>;
    constructor(
        private resolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
        @Inject(DOCUMENT) private document: Document
    ) {

    }

    // 打开弹框，需要添加组件
    public appendComponentTo(
        parentId: string,
        component: Type<any>,
        data: ChildConfig
    ) {
        // 创建的组件 constuctor 中能 接收到依赖注入的，东西在注入器中
        const childComponentRef = this.resolver.resolveComponentFactory(component).create(this.injector)
        this.childComponentRef = childComponentRef;
        // 为新创建的组件增加输入、输出
        this.attachData(data, childComponentRef)

        // 将创建的组件放到angular 的组件树（application）中
        this.appRef.attachView(childComponentRef.hostView)
     
        // 将组件的视图放入标签中
        const childDOMElement = (childComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        this.document.getElementById(parentId).appendChild(childDOMElement)
    }

    //  关闭弹框，会销毁组件
    removeComponent(){
        this.appRef.detachView(this.childComponentRef.hostView)
    }

    // 为弹框增加输入，输出属性
    attachData(data: ChildConfig, componentRef: ComponentRef<any>){
        const inputs = data.inputs;
        const outputs = data.outputs;

        for (const key in inputs) {
            if (Object.prototype.hasOwnProperty.call(inputs, key)) {
                const element = inputs[key];
                componentRef.instance[key] = element;
            }
        }

        for (const key in outputs) {
            if (Object.prototype.hasOwnProperty.call(outputs, key)) {
                const element = outputs[key];
                componentRef.instance[key] = element;
            }
        }
    }


}