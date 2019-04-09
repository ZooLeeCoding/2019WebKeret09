import { Component, OnInit, OnChanges, 
  SimpleChanges, EventEmitter,
  Input, Output } from '@angular/core';
import { FirebaseStoreService } from '../firebase-store.service';

@Component({
  selector: 'app-my-firszt',
  templateUrl: './my-firszt.component.html',
  styleUrls: ['./my-firszt.component.css']
})
export class MyFirsztComponent implements OnInit, OnChanges {

  @Input() name: String;
  @Input() num: Number;
  @Output() myEmitter = new EventEmitter();

  valtozo1: boolean;
  valtozo2: String;
  valtozo3: Number;
  valtozoLista: any[];

  constructor(private firebaseStore: FirebaseStoreService) {
    this.firebaseStore.getGyumolcsok().subscribe(data => {
      console.log(data);
      this.valtozoLista = data;
    }, error => {
      console.log("ERROR", error);
    })
    
    this.valtozo1 = true;
    this.valtozo2 = "RAKTAROZZ"
    this.valtozo3 = 0;
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log("onchanges");
    this.valtozo2 = this.name;
    this.valtozo3 = this.num;
  }

   raktarFeltoltes() {
     if(this.valtozo2 !== "RAKTAROZZ") {
      var newFruit = {neve: this.valtozo2, ara: this.valtozo3}
      this.valtozoLista.push(newFruit);
      this.firebaseStore.addGyumolcs(newFruit);
      this.myEmitter.emit(newFruit);
     }
   }

  venniAkarok(gyumolcs: any) {
    console.log("Vettem egy " + gyumolcs.neve + "-t " + 
    gyumolcs.ara + " forintert");
  }

  ngOnInit() {
    console.log("oninit");
  }

  ngDoCheck() {
    console.log("docheck");
  }

}
