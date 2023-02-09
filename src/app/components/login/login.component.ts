import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { TableserviceService } from 'src/app/services/tableservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public tableService: TableserviceService) { }

  ngOnInit(): void {
    this.getTableData();
  }

  async getTableData() {


    this.tableService.getTableData().subscribe(
      {
        next: (httpResponse: any) => {
          console.log("Next", httpResponse);
        },
        error: (err:any) => {
          console.log("Error", err)
        },
        complete: () => {
          console.log("Completed")
        }

      }
    )
  }


  // @ViewChild('otp1', { static: false }) otp1!: ElementRef;
  // @ViewChild('otp2', { static: false }) otp2!: ElementRef;
  // @ViewChild('otp3', { static: false }) otp3!: ElementRef;
  // @ViewChild('otp4', { static: false }) otp4!: ElementRef;
  // @ViewChild('otp5', { static: false }) otp5!: ElementRef;
  // @ViewChild('otp6', { static: false }) otp6!: ElementRef;
  // @ViewChild('otp7', { static: false }) otp7!: ElementRef;
  // @ViewChild('otp8', { static: false }) otp8!: ElementRef;
  // @ViewChild('otp9', { static: false }) otp9!: ElementRef;
  // @ViewChild('otp410', { static: false }) otp10!: ElementRef;

  // ngAfterViewInit() {
  //   this.otp1.nativeElement.addEventListener('input', this.focusNext.bind(this, this.otp2));
  //   this.otp2.nativeElement.addEventListener('input', this.focusNext.bind(this, this.otp3));
  //   this.otp3.nativeElement.addEventListener('input', this.focusNext.bind(this, this.otp4));
  //   this.otp4.nativeElement.addEventListener('input', this.focusNext.bind(this, this.otp5));
  //   // this.otp5.nativeElement.addEventListener('input', this.focusNext.bind(this, this.otp6));
  //   // this.otp6.nativeElement.addEventListener('input', this.focusNext.bind(this, this.otp7));
  //   // this.otp7.nativeElement.addEventListener('input', this.focusNext.bind(this, this.otp8));
  //   // this.otp8.nativeElement.addEventListener('input', this.focusNext.bind(this, this.otp9));
  //   // this.otp9.nativeElement.addEventListener('input', this.focusNext.bind(this, this.otp10));
  // }

  // focusNext(nextElement: ElementRef, event: any) {
  //   if (event.target.value.length === 1) {
  //     nextElement.nativeElement.focus();
  //   }
  // }

  // submit(formValue: any) {
  //   const otp = formValue.otp1 + formValue.otp2 + formValue.otp3 + formValue.otp4 + formValue.otp5 + formValue.otp5 + formValue.otp6
  //     + formValue.otp7 + formValue.otp8 + formValue.otp9 + formValue.otp10;
  //   console.log(otp);
  //   // perform action with the captured OTP value
  // }

}
