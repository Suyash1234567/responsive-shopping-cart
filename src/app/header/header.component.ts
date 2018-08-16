import { Component, OnInit } from '@angular/core';
import * as data from '../valuesJson.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tableData: any = [];
  searchText: string;
  total: number = 0;
  constructor() { }

  ngOnInit() {
    this.getAll();
  }

  getFruits() {
    this.tableData = data.Fruits;
    this.closeNav();
  }
  getVegetables() {
    this.tableData = data.Vegetables;
    this.closeNav();
  }
  getBiscuits() {
    this.tableData = data.Biscuits;
    this.closeNav();
  }
  getChocolates() {
    this.tableData = data.Chocolates;
    this.closeNav();
  }
  getAll() {
    this.tableData = [];
    data.Fruits.forEach(element => {
      this.tableData.push(element);
    });

    data.Biscuits.forEach(element => {
      this.tableData.push(element);
    });

    data.Vegetables.forEach(element => {
      this.tableData.push(element);
    });

    data.Chocolates.forEach(element => {
      this.tableData.push(element);
    });
    this.closeNav();
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
  }

  addToBasket(index) {
    this.total += this.tableData[index].price;
  }
}
