import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Product } from '../product';
import { DataApiService } from '../data-api.service';

@Component({
  selector: 'app-list-data',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './list-data.component.html',
  styleUrl: './list-data.component.css'
})
export class ListDataComponent implements OnInit{
  products: Product[]=[];
  product: Product=new Product();

  constructor(private productService: DataApiService){
  }

  ngOnInit(): void {
      this.productService.findAll().subscribe(data =>{
        this.products=data;
      });
  }

}
