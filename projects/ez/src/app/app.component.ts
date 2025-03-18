import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'rv-root',
  imports: [RouterOutlet, FormsModule, InputOtpModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ez';
  value: any;
}
