
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LojaVirtualComponent } from './loja-virtual/loja-virtual.component';
import { LojaComponent } from './loja/loja.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { MatematicaComponent } from './matematica/matematica.component';
import { CrudComponent } from './crud/crud.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UpdateComponent } from './users/update/update.component';
import { DeleteComponent } from './users/delete/delete.component';
import { CrudJsonComponent } from './crud-json/crud-json.component';
import { CrudJson2Component } from './crud-json2/crud-json2.component';
import { FormComponent } from './crud-json2/form/form.component';
import { ModalModule } from 'ngx-bootstrap';
import { FileUploadComponent } from './upload-file/file-upload.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    CursoDetalheComponent,
    LojaVirtualComponent,
    LojaComponent,
    EstoqueComponent,
    ProdutosComponent,
    MatematicaComponent,
    CrudComponent,
    UsersComponent,
    CreateUserComponent,
    UpdateComponent,
    DeleteComponent,
    CrudJsonComponent,
    CrudJson2Component,
    FormComponent,
    FileUploadComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
