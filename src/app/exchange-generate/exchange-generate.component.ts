import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { async } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exchange-generate',
  templateUrl: './exchange-generate.component.html',
  styleUrls: ['./exchange-generate.component.css']
})
export class ExchangeGenerateComponent implements OnInit {
  listExchange1=[];
  listExchangeValue=[];
  object:Object;
  registrationForm:FormGroup
  currency1:string;
  currency2:string;
  inputCurrency1:Number;
  inputCurrency2:Number;
  constructor(private httpClient:HttpClient,public fb: FormBuilder) { 
    this.registrationForm = this.fb.group({
      cityName: ['']
    })
  }

  ngOnInit(): void {
    this.httpClient.get('http://api.exchangeratesapi.io/v1/latest?access_key=6c6a7bdc3dcf0eb3246ca51d4eee2eb9').subscribe( result =>{
      this.object = result['rates'] 
      for (const [key, value] of Object.entries(this.object)) {
        this.listExchange1.push(key)
        this.listExchangeValue.push(value)
      }
    }) 
  }
  euroValue:Number ;
  euroValue2:Number ;
  changeCurrency1() {
    for(const [i, v] of this.listExchange1.entries()){
      if(this.currency1 == v){
        this.euroValue = Number(this.inputCurrency1)/this.listExchangeValue[i]
      }
    }
    for(const [i, v] of this.listExchange1.entries()){
      if(this.currency2 == v){
        console.log(this.euroValue)
        this.inputCurrency2 = Number(this.euroValue)*this.listExchangeValue[i]
        this.inputCurrency2 = Number(this.inputCurrency2.toFixed(2))
      }
    }
  }
  changeCurrency2() {
    console.log("มานะ")
    for(const [i, v] of this.listExchange1.entries()){
      if(this.currency2 == v){
        this.euroValue2 = Number(this.inputCurrency2)/this.listExchangeValue[i]
        console.log(this.inputCurrency2)
        console.log(this.euroValue2)
      }
    }
    for(const [i, v] of this.listExchange1.entries()){
      if(this.currency1 == v){
        console.log(this.euroValue2)
        this.inputCurrency1 = Number(this.euroValue2)*this.listExchangeValue[i]
        this.inputCurrency1 = Number(this.inputCurrency1.toFixed(2))
      }
    }
  }
}
