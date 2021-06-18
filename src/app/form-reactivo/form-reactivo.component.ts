import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent {
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  profileForm = this.fb.group({
    firstName: ['dfjdf', Validators.required],
    lastName: ['ghjkg'],
    address: this.fb.group({
      street: ['sdfgsdf'],
      city: ['dfgjdf'],
      state: ['jhkghj'],
      zip: ['fghjfghj']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
