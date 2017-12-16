import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AgGridModule} from 'ag-grid-angular/main';
import {AppComponent} from './app.component';
import {SampleGridComponent} from './sample-grid/sample-grid.component';
import {SampleGridService} from './sample-grid.service';
import { HttpClientModule } from '@angular/common/http';
import { SampleTreeComponent } from './sample-tree/sample-tree.component';
//import { NgModel } from '@angular/forms';
import { TreeModule } from 'angular-tree-component';


@NgModule({
    declarations: [
        AppComponent,
        SampleGridComponent,
        SampleTreeComponent
    ],
    imports: [
        BrowserModule,
        TreeModule,
        HttpClientModule,
        AgGridModule.withComponents(
            []
        )
    ],
    providers: [SampleGridService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
