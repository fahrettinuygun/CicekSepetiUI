import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[] = [
    {
      id:1,
      name:'Kucak Dolusu Aşk 5 Kırmızı Gül Buketi',
      freeCargo: false,
      price: 29.90,
      currency: 'TL',
      img:'../../../assets/img/red-rose/red-rose-2x.png',
      categoryId:7
    },
    {
      id:2,
      name:'Kucak Dolusu Aşk 15 Kırmızı Gül Buketi',
      freeCargo: false,
      price: 59.90,
      currency: 'TL',
      img:'../../../assets/img/red-rose/red-rose-2x.png',
      categoryId:7
    },
    {
      id:3,
      name:'Kucak Dolusu Aşk 25 Kırmızı Gül Buketi',
      freeCargo: true,
      price: 99.90,
      currency: 'TL',
      img:'../../../assets/img/red-rose/red-rose-2x.png',
      categoryId:7
    },
    {
      id:4,
      name:'Kucak Dolusu Aşk 35 Kırmızı Gül Buketi',
      freeCargo: true,
      price: 129.90,
      currency: 'TL',
      img:'../../../assets/img/red-rose/red-rose-2x.png',
      categoryId:7
    },
    {
      id:5,
      name:'130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
      freeCargo: true,
      price: 89.90,
      currency: 'TL',
      img:'../../../assets/img/pink-bear/pink-bear-2x.png',
      categoryId:8
    },
    {
      id:6,
      name:'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
      freeCargo: true,
      price: 399.90,
      currency: 'TL',
      img:'../../../assets/img/smart-watch/smart-watch-2x.png',
      categoryId:1
    },
    {
      id:7,
      name:'130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
      freeCargo: true,
      price: 89.90,
      currency: 'TL',
      img:'../../../assets/img/pink-bear/pink-bear-2x.png',
      categoryId:8
    },
    {
      id:8,
      name:'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
      freeCargo: true,
      price: 399.90,
      currency: 'TL',
      img:'../../../assets/img/smart-watch/smart-watch-2x.png',
      categoryId:1
    },
    {
      id:9,
      name:'130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
      freeCargo: true,
      price: 89.90,
      currency: 'TL',
      img:'../../../assets/img/pink-bear/pink-bear-2x.png',
      categoryId:8
    },
    {
      id:10,
      name:'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
      freeCargo: true,
      price: 399.90,
      currency: 'TL',
      img:'../../../assets/img/smart-watch/smart-watch-2x.png',
      categoryId:1
    },
    {
      id:11,
      name:'130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
      freeCargo: true,
      price: 89.90,
      currency: 'TL',
      img:'../../../assets/img/pink-bear/pink-bear-2x.png',
      categoryId:8
    },
    {
      id:12,
      name:'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
      freeCargo: true,
      price: 399.90,
      currency: 'TL',
      img:'../../../assets/img/smart-watch/smart-watch-2x.png',
      categoryId:1
    },
    {
      id:13,
      name:'130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
      freeCargo: true,
      price: 89.90,
      currency: 'TL',
      img:'../../../assets/img/pink-bear/pink-bear-2x.png',
      categoryId:8
    },
    {
      id:14,
      name:'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
      freeCargo: true,
      price: 399.90,
      currency: 'TL',
      img:'../../../assets/img/smart-watch/smart-watch-2x.png',
      categoryId:1
    },
    {
      id:15,
      name:'130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
      freeCargo: true,
      price: 89.90,
      currency: 'TL',
      img:'../../../assets/img/pink-bear/pink-bear-2x.png',
      categoryId:8
    },
    {
      id:16,
      name:'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
      freeCargo: true,
      price: 399.90,
      currency: 'TL',
      img:'../../../assets/img/smart-watch/smart-watch-2x.png',
      categoryId:1
    },
    {
      id:17,
      name:'130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
      freeCargo: true,
      price: 89.90,
      currency: 'TL',
      img:'../../../assets/img/pink-bear/pink-bear-2x.png',
      categoryId:8
    },
    {
      id:18,
      name:'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
      freeCargo: true,
      price: 399.90,
      currency: 'TL',
      img:'../../../assets/img/smart-watch/smart-watch-2x.png',
      categoryId:1
    },
    {
      id:19,
      name:'130 Cm Papyonlu Büyük Ayıcı (%100 Yerli)',
      freeCargo: true,
      price: 89.90,
      currency: 'TL',
      img:'../../../assets/img/pink-bear/pink-bear-2x.png',
      categoryId:8
    },
    {
      id:20,
      name:'Z6 Akıllı Saat Kameralı Konuşma Garantili Sim Kartlı Bluetooth',
      freeCargo: true,
      price: 399.90,
      currency: 'TL',
      img:'../../../assets/img/smart-watch/smart-watch-2x.png',
      categoryId:1
    }
  ];
  constructor() { }

  getProduct(): Product[]{
    return this.productList;
  }
}
