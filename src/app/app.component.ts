import { Component } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Currency converter';
	currjson: any = []
	currjsonFromTo: any = []
	currjsonToFrom: any = []
	
	toglieInput: boolean = true
	from = "USD"
	to = "UAH"
	infofrom: string = "USD"
	infoto = "UAH"
	result1: any = 1
	result2: any = this.changeSelect("USD","UAH","1","1")
	inforesultUSD: any = this.infocurrency("USD")
	inforesultEUR: any = this.infocurrency("EUR")

	changeSelect(a: string, b: string, in1: string, in2: string) {
		this.from = a
		this.to = b
		this.currency.getcurrencydata(this.from, this.to).subscribe(data => {
			this.currjsonFromTo = JSON.stringify(data)
			this.currjsonFromTo = JSON.parse(this.currjsonFromTo)
			this.currjsonToFrom.result = 1 / Number(this.currjsonFromTo.result)
			this.currjsonToFrom.result = Number(this.currjsonToFrom.result.toFixed(6))
			if (this.toglieInput) {
				this.result2 = Number((this.currjsonFromTo.result * Number(in1)).toFixed(6))
			} else {
				this.result1 = Number((this.currjsonToFrom.result * Number(in2)).toFixed(6))
			}
		})
}
	
	changefrominput(in1: string) {
		this.toglieInput = true
		this.result2 = Number((this.currjsonFromTo.result * Number(in1)).toFixed(6))	
	}
	changetoinput(in2: string) {
		this.toglieInput = false
		this.result1 = Number((this.currjsonToFrom.result * Number(in2)).toFixed(6))
	}

	infocurrency(a: string,) {
		this.infofrom = a
		this.currency.getcurrencydata(this.infofrom, this.infoto).subscribe(data => {
			this.currjson = JSON.stringify(data)
			this.currjson = JSON.parse(this.currjson)
			if (a==="USD") {
				this.inforesultUSD = this.currjson.result
			} else {
				this.inforesultEUR= this.currjson.result
			}
			this.currjson.result = "1"
		})
		
	}
	constructor(private currency: CurrencyapidataService){}
}
