import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  ColDef,
  ColumnApi,
  GridApi,
  GridReadyEvent,
  Module
} from '@ag-grid-community/core';

import { customers } from '../../data/data.json';
import { aggridModules } from './aggrid-modules';
import { AgGridAngular } from '@ag-grid-community/angular';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(AgGridAngular) aggrid: AgGridAngular;

  readonly modules: Module[] = aggridModules;

  private readonly destroyed$ = new Subject<void>();

  gridApi: GridApi;
  columnApi: ColumnApi;

  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', sortable: true },
    { headerName: 'Catch Phrase', field: 'catchPhrase', sortable: true }
  ];

  /**
   * Import customers from /data/data.json file
   */
  rowData: Array<{ [key: string]: string | number | object }> = customers;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }
}
