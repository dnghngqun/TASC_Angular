import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.InitForm();
  }
  form!: FormGroup;

  InitForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      job: ['', [Validators.required]],
    });
  }
  onSubmit() {
    console.log(this.form.value);
    let value = this.form.getRawValue();
    this.userService.create(value).subscribe((res) => {
      if (res) {
        alert('success');
      } else {
        alert('fail');
      }
    });
  }
}
