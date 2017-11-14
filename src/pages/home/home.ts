import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder,Form,Validators} from '@angular/forms';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userForm:any;
  emi:any;
  period:any;
  intrest:any;
  l_amount:any;
  constructor(public _fb:FormBuilder,public navCtrl: NavController) {
   
    this.userForm = this._fb.group({
                    l_amount :[null,[Validators.required]],
                    interst :[null,[Validators.required]],
                    period :[null,[Validators.required]]
                    });
  }
  Onsubmit(){

      this.l_amount=this.userForm.value.l_amount;
      this.intrest=this.userForm.value.interst;
      this.period=this.userForm.value.period*12; 
      let monthly_intrest=this.intrest/12/100; 
      this.emi=(this.l_amount*monthly_intrest*(Math.pow((1+monthly_intrest),this.period)))/((Math.pow((1+monthly_intrest),this.period))-1);

  }
  Details(){
    this.navCtrl.push('DetailsPage',{"emi":this.emi,"l_amount":this.l_amount,"period":this.period,"intrest":this.intrest});
  }
}
