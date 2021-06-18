import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  baseUrl = "http://localhost:3001/banco"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top" 
    })
  }

  create(banco: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, banco)
  }

  getBancos(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }

}