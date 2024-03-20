import { Component } from '@angular/core';

@Component({
  selector: 'app-example3',
  template: `
  <h1>Componente example3</h1>
    <p>example3 works! {{edad}}</p>
  `,
  styles: ` 
  p {
    font-weight:800;
  }
  `,
})
export class Example3Component {
edad = 33;
}
