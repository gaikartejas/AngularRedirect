import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators
} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  demoForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    mobile: new FormControl('',Validators.pattern('^[789][0-9]{9}'))
    
  });

  Submit(){

  }
  hide= true;
  Display=true;
  Display1=true;
  Display2=true;
  Login(){
    this.Display = false;
  }
  Login1(){
    this.Display = false;
    this.Display1=false;
  }
  Login2(){
    this.Display=false;
    this.Display1=true;
    this.Display2 = false;
  }

  DisplayContent(){
    this.hide=false;
  }
}
