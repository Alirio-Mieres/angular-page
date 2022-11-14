import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescription } from 'src/app/interfaces/producto-description';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto!: ProductoDescription;
  id!: string;

  constructor( 
    private route: ActivatedRoute,
    public  productService: ProductosService) { }

  ngOnInit() {

    this.route.params
      .subscribe( parametros => {
        console.log(parametros);

        this.productService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescription)  => {
            this.id = parametros['id'];
            this.producto = producto;
          })
      });

      

  }

}
