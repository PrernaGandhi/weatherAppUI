import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Address } from './address.module';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent {
   form: FormGroup;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(){
this.form = this.fb.group({
    addresses: this.fb.array([])
  });
}

  onRemove(i) {
    console.log('remove was called', i);
    const addressControl = this.form.controls.addresses as FormArray;
    addressControl.removeAt(i);

  }

  onAdd(address: Address) {
    const addressControl = this.form.controls.addresses as FormArray;
    addressControl.push(this.createAddressFormGroup(new Address()));
    console.log(addressControl);
    console.log(this.form.controls.addresses);
  }

  createAddressFormGroup(address: Address) {
    return this.fb.group({
      locationName: '',
      stateName: ''
    })
  }

}
