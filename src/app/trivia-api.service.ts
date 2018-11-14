import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface beAMillionereLine{
	category:string,
	correct_answer:string,
	difficulty:string,
	incorrect_answer:Array<string>,
	question:string,
	type:string
}
export interface beAMillionere{
	response_code:number,
    results:Array<beAMillionereLine>
}

@Injectable({
  providedIn: 'root'
})
export class TriviaApiService {

	constructor(private http:HttpClient) { }
	getData(){
	    return this.http.get<beAMillionere>('https://opentdb.com/api.php?amount=10&type=multiple')
	}
}
