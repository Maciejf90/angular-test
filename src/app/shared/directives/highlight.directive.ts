import { Directive, HostBinding, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  appHighlight = 'yellow';

  @Input()
  appHighlightDecoration = 'underline';

  @HostBinding('style.text-decoration')
  decoration = '';


  constructor(private el: ElementRef, private renderer: Renderer) {  }

  @HostListener('click')
  onmouseover() {
    // console.log('over', this.appHighlight, this.appHighlightDecoration);
    this.decoration = 'underline';

    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseout')
  onmouseout() {
    // console.log('out');
    this.decoration = '';
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', '');
  }

}
