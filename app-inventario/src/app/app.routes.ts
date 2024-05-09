import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetallesproductosComponent } from './pages/detallesproductos/detallesproductos.component';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component:HomeComponent},
    {path: 'productos', component:ProductosComponent},
    {path: 'ofertas', component:OfertasComponent},
    {path: 'nosotros', component:NosotrosComponent},
    {path: 'contactos', component:ContactosComponent},
    {path: '**', component:Error404Component},
    { path: 'productos-detalles/:idProductos', component: DetallesproductosComponent},
];

