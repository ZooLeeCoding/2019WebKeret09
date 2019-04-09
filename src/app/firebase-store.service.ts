import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStoreService {

  private baseUrl = "/gyumolcsok"

  constructor(private db: AngularFireDatabase) { }

  getGyumolcsok(): Observable<any> {
    return this.db.list(this.baseUrl).valueChanges();
  }
}
