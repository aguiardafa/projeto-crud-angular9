import { Directive, Input, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appLoop]'
})
export class LoopDirective implements OnInit {

  @Input('appLoopEm') numbers: number[]

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, 
        { $implicit : number }
      )
    }
  }
}
