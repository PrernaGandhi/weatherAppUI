import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HumidityValidators } from './humidity.validators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  form = new FormGroup({
    locationName: new FormControl('', Validators.required),
    stateName: new FormControl('', Validators.required),
    countryName: new FormControl('', Validators.required),
    temperature: new FormControl('', Validators.required),
    humidity: new FormControl('', [
      Validators.required,
      HumidityValidators.containPercentageSign
    ]),
  })

  get locationName() {
    return this.form.get('locationName');
  }
  get stateName() {
    return this.form.get('stateName');
  }
  get countryName() {
    return this.form.get('countryName');
  }
  get temperature() {
    return this.form.get('temperature');
  }
  get humidity() {
    return this.form.get('humidity');
  }

}
