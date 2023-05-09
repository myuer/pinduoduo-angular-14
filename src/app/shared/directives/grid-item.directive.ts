import { Directive, ElementRef, HostBinding, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appGridItem]'
})
export class GridItemDirective implements OnInit {
    @HostBinding('style.display') display = 'grid';
    @HostBinding('style.grid-template-areas') template = `'image' 'title'`;
    @HostBinding('style.place-items') align = 'center';
    @HostBinding('style.width') width = '4rem';


    constructor(
    //     private el: ElementRef,
    //     private rd2: Renderer2
    ) { }

    ngOnInit(): void {
        // this.rd2.setStyle(this.el.nativeElement, 'display', 'grid');
        // this.rd2.setStyle(this.el.nativeElement, 'grid-template-areas', `'image' 'title'`);
        // this.rd2.setStyle(this.el.nativeElement, 'place-items', 'center');
        // this.rd2.setStyle(this.el.nativeElement, 'width', '4rem');
    }

}
