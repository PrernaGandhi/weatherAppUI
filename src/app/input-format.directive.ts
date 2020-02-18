import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private element: ElementRef) { }

  @HostListener('blur') onBlur() {
    let valueOfElement: string = this.element.nativeElement.value;
    this.element.nativeElement.value = valueOfElement.toLowerCase();
  }
}
