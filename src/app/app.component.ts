import { Component } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'my first app';
	currjson: any = []
	
	from = "USD"
	to = "USD"
	result1: string = "1"
	result2: string = "1"

	changefrom(a: string, b: string, in1: string ) {
		this.from = a
		this.to = b
		this.currency.getcurrencydata(this.from, this.to).subscribe(data => {
			this.currjson = JSON.stringify(data)
			this.currjson = JSON.parse(this.currjson)
			this.result2 = String(Number(this.currjson.result)*Number(in1))
		})
	}
	changeto(a: string, b: string, in2: string ) {
		this.from = b
		this.to = a
		this.currency.getcurrencydata(this.from, this.to).subscribe(data => {
			this.currjson = JSON.stringify(data)
			this.currjson = JSON.parse(this.currjson)
			this.result1 = String(Number(this.currjson.result)*Number(in2))
		})
	}
	constructor(private currency: CurrencyapidataService){}
}
