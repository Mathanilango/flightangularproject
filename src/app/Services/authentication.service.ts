import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, config, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../Models/User';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
   

    constructor(private http: HttpClient) {
      
    }

    
    login(username:string, password:string ) { {
        return this.http.post('http://localhost:8000/Login', {username, password},{responseType: "text"});
    }

    
}
}