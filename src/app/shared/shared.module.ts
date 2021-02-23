
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule
];

@NgModule({
  declarations: [],
  imports: [
    ...materialModules,
    CommonModule,
  ],
  exports: [...materialModules]
})
export class SharedModule { }
