import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

import { HeaderComponent } from './components/header/header.component';
import { ToDoButtonDeleteComponent } from './components/to-do-button-delete/to-do-button-delete.component';
import { ToDoInputAddItemsComponent } from './components/to-do-input-add-items/to-do-input-add-items.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ToDoButtonDeleteComponent,
    ToDoInputAddItemsComponent,
    ToDoListComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
})
export class HomeModule {}
