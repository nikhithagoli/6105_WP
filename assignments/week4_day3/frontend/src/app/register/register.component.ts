import { Component, OnInit } from '@angular/core';
import {RegistersService} from '../registers.service';
import {Register} from '../register';
import {NgForm, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegistersService]
})
export class RegisterComponent implements OnInit {
  registers: Register[];
  register: Register;
  first_name:string;
  last_name:string;
  mobile:number;
  email:string;
  password:string;
  address:string;
  registerForm: FormGroup;
  submitted = false;
  constructor(private registerService: RegistersService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      number: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.registerService.getRegisters().subscribe( registers => this.registers = registers);
  }

}
