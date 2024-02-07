import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Bosses} from "./models/boss.model";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BossService {
  private dbPath = '/bosses';
  bossRef: AngularFirestoreCollection<Bosses>;

  constructor(
    private db: AngularFirestore
  ) {
    this.bossRef = db.collection(this.dbPath);
  }

  getAll(): any {
    return this.bossRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  get(id: any): any {
    return  new Observable(obs => {
      this.bossRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(boss:Bosses) {
    return new Observable(obs => {
      this.bossRef.doc(boss.id).update(boss);
      obs.next();
    });
  }

  delete(id: string): Promise<void> {
    return this.bossRef.doc(id).delete();
  }

  saveNewBoss(boss: Bosses) : any {
    return new Observable(obs => {
      this.bossRef.add({...boss}).then(() => {
        obs.next();
      });
    });
  }
}
