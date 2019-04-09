import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStoreService {

  private baseUrl = "gyumolcsok"

  constructor(private db: AngularFirestore) { }

  getGyumolcsok(): Observable<any> {
    return this.db.collection(this.baseUrl).valueChanges();
  }

  addGyumolcs(gyumolcs: any) {
    this.db.collection(this.baseUrl).add(gyumolcs);
  }
}
