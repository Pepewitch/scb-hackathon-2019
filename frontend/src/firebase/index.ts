import { Pool } from "./../types/pool";
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBdStlZmHCgLh0tBs36wsOR8peStNroGcE",
  authDomain: "scb-hack-254d9.firebaseapp.com",
  databaseURL: "https://scb-hack-254d9.firebaseio.com",
  projectId: "scb-hack-254d9",
  storageBucket: "",
  messagingSenderId: "873927844849",
  appId: "1:873927844849:web:ff18894d3ccff2a9"
};

firebase.initializeApp(config);

export const randomPoolRef = firebase.database().ref("/randomPool");
export const itemRef = firebase.database().ref("/item");

export const addPool = (pool: Pool) => {
  randomPoolRef.push(pool);
};

export const deletePool = (poolId: string) => {
  randomPoolRef.child(poolId).remove();
};
