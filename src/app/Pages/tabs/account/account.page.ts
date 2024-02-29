import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  requests: any[] = [];
  isLoading: boolean = false;
  constructor() {}

  model: any = {
    icon: 'restaurant-outline',
    title: 'Você ainda não fez nenhum pedido',
  };

  ngOnInit() {
    this.isLoading = true;
    setTimeout(()=>{
    this.requests = [
      {
        name: 'Dom Henrique 1',
        adress: 'Guarapuava',
        unid: ['Pizza x2', 'Hamburger x2'],
        price: 180,
        data: 'Fevereiro 28, 2024 - 21:03',
        status: 'entregue',
      },
      {
        name: 'Dom Henrique 2',
        adress: 'Guarapuava',
        unid: ['Salad 2x', 'Coke Zero 2x'],
        price: 100,
        data: 'Janeiro 20, 2024 - 17:30',
        status: 'entregue',
      },
      {
        name: 'JC Lanches',
        adress: 'Guarapuava',
        unid: ['X-Strogonoff 2x', 'Coca-cola 2x'],
        price: 55,
        data: 'Janeiro 20, 2024 - 17:30',
        status: 'entregue',
      },
    ];
    this.isLoading = false;
  },3000);
  }
}
