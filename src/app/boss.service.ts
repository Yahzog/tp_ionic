import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Boss} from "./models/boss.model";

@Injectable({
  providedIn: 'root'
})
export class BossService {
  private dbPath = '/boss';
  bossRef: AngularFirestoreCollection<Boss>;

  constructor(
    private db: AngularFirestore
  ) {
    this.bossRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Boss> {
    return this.bossRef;
  }

  get(id: string): AngularFirestoreCollection<Boss> {
    return this.bossRef;
  }

  update(id: string, data: any): Promise<void> {
    return this.bossRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.bossRef.doc(id).delete();
  }

  saveNewBoss(boss: Boss): Promise<any> {
    return this.bossRef.add({...boss});
  }
}
