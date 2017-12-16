import {Component,OnInit} from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import {SampleGridService} from '../sample-grid.service';


@Component({
    selector: 'app-sample-grid',
    templateUrl: './sample-grid.component.html'
})
export class SampleGridComponent implements OnInit{
    gridOptions: GridOptions;
    columnDefs: any[]
    rowData: any[];
    selectedCol: any ;
    

    constructor(private sampleGridService : SampleGridService){}

    ngOnInit(){
        this.gridOptions = <GridOptions>{};

                this.columnDefs = [
                    {headerName: 'ID', field: 'id'},
                    {headerName: 'FirstName', field: 'firstName', editable: true},
                    {headerName: 'LastName', field: 'lastName', editable: true},
                    {headerName: 'AccountBalance', field: 'accountBalance', editable: true}
                ];

       this.sampleGridService.getDataGrid().subscribe(data => {
        // Read the result field from the JSON response.
        this.rowData = data;
      });
    }

    onGridReady(params) {
        params.api.sizeColumnsToFit();
    }

    selectAllRows() {
        this.gridOptions.api.selectAll();
    }

    changeValue(params) {
        // console.log('params=' + params.newValue);
        // console.log('this.rowData =' + JSON.stringify( this.rowData) );
        this.sampleGridService.setDataGrid(this.rowData);
    }
    addColumn(title: string) {
        console.log('cName=' + title);
         this.columnDefs.push({field: title.toLocaleLowerCase(),  headerName: title, editable: true});
         this.gridOptions.api.setColumnDefs(this.columnDefs);
         //this.gridOptions.columnDefs.push({field:'new', headerName: 'New', editable: true});
         this.gridOptions.api.sizeColumnsToFit();
         this.gridOptions.api.refreshView();
    }

    removeColumn(title: string) {
        //this.columnDefs.pop();
        //let n = this.columnDefs.find()
        //console.log("to be removed"+ n);
        // this.columnDefs.splice(1,1);
        // this.gridOptions.api.setColumnDefs(this.columnDefs);
        // this.gridOptions.api.sizeColumnsToFit();
        // this.gridOptions.api.refreshView();
    }  

    onSelect(selectedVal : any) { 
        //this.selectedProduct = null;
        console.log("onSelect():"+ selectedVal.target.value);
        for (var i = 0; i < this.columnDefs.length; i++)
        {
          if (this.columnDefs[i].headerName == selectedVal.target.value) {
            //this.selectedProduct = this.products[i];
            console.log("selected item:"+this.columnDefs[i].headerName);
            this.selectedCol = this.columnDefs[i];
          }
        }
    }

    deleteColumn() {
        //this.columnDefs.pop();
        let n = this.columnDefs.indexOf(this.selectedCol);
        console.log("to be removed"+ n);
         this.columnDefs.splice(n,1);
         this.gridOptions.api.setColumnDefs(this.columnDefs);
         this.gridOptions.api.sizeColumnsToFit();
         this.gridOptions.api.refreshView();
    }  
    
    printGrid(){
        console.log('columnDefs:=' + JSON.stringify(this.columnDefs));
        console.log('rowData:=' + JSON.stringify(this.rowData));
    }
}

