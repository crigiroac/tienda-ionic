import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductoProvider } from '../../providers/producto/producto';
import { DetalleProductoPage } from '../detalle-producto/detalle-producto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  productos = [];
  constructor(public navCtrl: NavController,
    private servicioProducto: ProductoProvider) {

  }

  ionViewDidLoad() {
    this.servicioProducto.obtenerProductos().subscribe((data: any[]) => {
      console.log(data);
      this.productos = data
    });
  }
  irPaginaDetalle(producto){
    this.navCtrl.push(DetalleProductoPage,{miProducto:producto});
  }
}
