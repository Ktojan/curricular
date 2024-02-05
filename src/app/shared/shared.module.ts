import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedCardComponent } from './shared-card.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatRippleModule} from '@angular/material/core';
import { CdkTableModule } from '@angular/cdk/table';
import { A11yModule } from '@angular/cdk/a11y';
import { MatChipsModule } from '@angular/material/chips';
import { KeyValuePipe } from '@angular/common';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatSidenavModule,
        MatTableModule,
        MatTabsModule,
        MatRadioModule,
        MatRippleModule,
        MatChipsModule,
        CdkTableModule,  
        A11yModule, 
        FlexLayoutModule,
    ],
    exports: [
        FormsModule,
        SharedCardComponent,
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatSidenavModule,
        MatTableModule,
        MatTabsModule,
        MatRadioModule,
        MatRippleModule,
        MatChipsModule,
        CdkTableModule,
        FlexLayoutModule,
    ],
    declarations: [SharedCardComponent],
    providers: [KeyValuePipe],
})
export class SharedStuffAndMaterialModule { }
