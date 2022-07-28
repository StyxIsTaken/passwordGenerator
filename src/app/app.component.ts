import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //weirdo ts 
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  succOrfail = '';
  onChangeLength(target : EventTarget) {
    const value  = (<HTMLInputElement>target).value;
    const parsedValue = parseInt(value);
    
     
    if (isNaN(parsedValue)) {
      console.log("Field: Enter Length");
      this.succOrfail = "Value in Field: Enter Length is not an integer";
      return
    }
    
    this.length = Math.min(parsedValue, 64);
 
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    console.log(`
      About to generate a password with the following:
      Includes letters: ${this.includeLetters}
      Includes numbers: ${this.includeNumbers}
      Includes symbols: ${this.includeSymbols}
      Includes # Chars: ${this.length}
    `);
    
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*';

    let validChars ='';

    if(this.includeLetters){
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPass = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPass += validChars[index];
    }

    this.password = generatedPass;
    this.succOrfail = `Success! Generated Password: ${this.password}`;
  }
}
