import { Stock } from "./../types/stock";
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

export const stocksRef = firebase.database().ref("/stocks");

export const addStock = (stock: Stock) => {
  stocksRef.push(stock);
};

export const deleteStock = (stockId: string) => {
  stocksRef.child(stockId).remove();
};
