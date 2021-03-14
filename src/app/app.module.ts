import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainScreenComponent } from './screens/main-screen/main-screen.component';
import { SearchComponent } from './components/search/search.component';
import { BasketComponent } from './components/basket/basket.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { CampaignCardComponent } from './components/campaign-card/campaign-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainScreenComponent,
    SearchComponent,
    BasketComponent,
    BreadCrumbComponent,
    CategoriesComponent,
    ProductListComponent,
    ProductCardComponent,
    CampaignsComponent,
    CampaignCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
