import { Inject, Injectable, Type } from '@angular/core';
import { ChildConfig, DomService } from './dom.service';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    private readonly dialogElementId = 'dialog-container';
    private readonly overlayElementId = 'overlay'
    private data$ = new BehaviorSubject<object | null>(null);


    constructor(private domService: DomService, @Inject(DOCUMENT) private document: Document) {
    }

    open(component: Type<any>, config: ChildConfig) {
        this.domService.appendComponentTo(this.dialogElementId, component, config)
        if (config.position) {
            const element = this.document.getElementById(this.dialogElementId);
            element.style.width = config.position.width;
            element.style.height = config.position.height;
            element.style.top = config.position.top;
            element.style.left = config.position.left;
        }
        // 打开弹框,清空数据
        this.toggleAll()
        this.data$.next(null)
    }

    close() {
        this.domService.removeComponent();
        // 关闭弹框
        this.toggleAll()
    }

    // 弹框传递数据

    getData() {
        this.data$.asObservable()
    }

    setData(value: object | null) {
        this.data$.next(value)
    }


    private toggleAll() {
        this.toggleVisibility(this.document.getElementById(this.dialogElementId))
        this.toggleVisibility(this.document.getElementById(this.overlayElementId))
    }

    private toggleVisibility(element: HTMLElement) {
        if (element.classList.contains('show')) {
            element.classList.remove('show');
            element.classList.add('hidden')
            return;
        }

        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
            element.classList.add('show')
        }
    }
}