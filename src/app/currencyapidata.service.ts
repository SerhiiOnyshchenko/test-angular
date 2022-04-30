import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {

	constructor(private http: HttpClient) { }
	getcurrencydata(country1: string, country2: string) {
		let url = `https://api.exchangerate.host/convert?&from=${country1}&to=${country2}` 
		return this.http.get(url)
	}
}
