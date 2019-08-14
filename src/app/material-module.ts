import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule ,MatSelectModule, MatOptionModule, MatDialogModule, MatSortModule, 
    MatTableModule, MatGridListModule ,MatToolbarModule, MatButtonModule, MatSidenavModule, 
    MatIconModule, MatListModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, 
    MatMenuModule, MatTooltipModule } from '@angular/material';


@NgModule({
    exports: [
        LayoutModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatTableModule,
        MatSortModule,
        MatDialogModule,
        MatOptionModule,
        MatSelectModule,
        MatTabsModule,
        MatMenuModule,
        MatTooltipModule
    ]
})

export class MaterialModule { }