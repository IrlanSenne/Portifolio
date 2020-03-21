import { FileUploadComponent } from './upload-file/file-upload.component';
import { FormComponent } from './crud-json2/form/form.component';
import { CrudJson2Component } from './crud-json2/crud-json2.component';
import { DeleteComponent } from './users/delete/delete.component';
import { UpdateComponent } from './users/update/update.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UsersComponent } from './users/users.component';
import {Routes, RouterModule} from '@angular/router'

import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { LojaVirtualComponent } from './loja-virtual/loja-virtual.component';
import { MatematicaComponent } from './matematica/matematica.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { LojaComponent } from './loja/loja.component';
import { CrudComponent } from './crud/crud.component';

const APP_ROUTES: Routes =[
   
    { path: 'projetos', component: CursosComponent},
    { path: 'curso/:id', component: CursoDetalheComponent},
    { path: 'contato', component: LoginComponent},
    { path: '', component: HomeComponent},
    { path: 'loja-virtual', component: LojaVirtualComponent},
    { path: 'loja-virtual/loja', component: LojaComponent},
    { path: 'loja-virtual/carrinho', component: EstoqueComponent},
    { path: 'matematica', component: MatematicaComponent},
    { path: 'crud', component: CrudComponent},
    { path: 'users', component: UsersComponent},
    { path: 'users/create', component: CreateUserComponent},
    { path: 'users/update/:id', component: UpdateComponent},
    { path: 'users/delete/:id', component: DeleteComponent},
    { path: 'crud/crud-json2', component: CrudJson2Component},
    { path: 'nova', component: FormComponent},
    { path: 'crud/crud-json2/editar/:id', component: FormComponent},
    { path: 'upload-file', component: FileUploadComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES)