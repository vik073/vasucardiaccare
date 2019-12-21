import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor( private http:HttpClient) { }

  sendappointmentEmail(name:string , phone:string, age :string, service:string , day:string , time:string ){

    var t ='https://vccserver.herokuapp.com/?name='+name+'&age='+age+'&service='+service+'&phone='+phone+'&time='+time;
       return this.http.get<string>('https://vccserver.herokuapp.com/?name='+name+'&age='+age+'&service='+service+'&day='+day+'&phone='+phone+'&time='+time);
  }

  sendContactEmail(name:string , phone:number, age:number){
    return this.http.get('https://vccserver.herokuapp.com/?name='+name+'&age='+age+'&phone='+phone+'&service='+'Callme'+'&time=' +'Not Mentioned'+ '&day= Not Mentioned' );
 
  }
}
