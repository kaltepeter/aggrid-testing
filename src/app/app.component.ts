import { Component } from '@angular/core';
import { ColDef, Module } from '@ag-grid-community/core';

import { customers } from '../../data/data.json';
import { aggridModules } from './aggrid-modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly modules: Module[] = aggridModules;

  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', sortable: true },
    { headerName: 'Catch Phrase', field: 'catchPhrase', sortable: true }
  ];

  /**
   * Import customers from /data/data.json file
   */
  rowData: Array<{ [key: string]: string | number | object }> = customers;
}
