import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { filter, finalize, startWith, takeWhile, tap, timer } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  isChanged: boolean = false;
  isLoading: boolean = false;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.isLoading = true;

    timer(500)
      .pipe(
        tap(() => {
          this.productForm.controls['name'].setValue('test');
        }),
        finalize(() => (this.isLoading = false))
      )
      .subscribe(() => {});
  }

  handleSubcribeChanging() {
    this.productForm.statusChanges
      .pipe(
        startWith('VALID'),
        // filter((x) => x === 'VALID'),
        tap((val) => {
          // console.log(val);
        })
      )
      .subscribe(() => {});

    this.productForm.valueChanges
      .pipe(
        tap((val) => {
          console.log('value change ', val);
          if (this.productForm.dirty) {
            this.isChanged = true;
          }
        })
      )
      .subscribe(() => {});
  }

  initForm() {
    this.productForm = this._fb.group({
      name: ['', Validators.compose([Validators.required])],
      quantity: [
        null,
        Validators.compose([Validators.required, Validators.max(5)]),
      ],
      desc: ['', Validators.compose([Validators.required])],
    });
    this.handleSubcribeChanging();
  }

  handleFormSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
    } else {
      Object.values(this.productForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
