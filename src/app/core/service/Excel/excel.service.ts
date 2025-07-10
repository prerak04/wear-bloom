import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

/**
 * Provides a set of function to use in Excel feature
 */
@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  private data = undefined;

  constructor() { }

  /**
   * a setter function used to enclose private varibale of Service
   */
  set setExportData(data: any) {
    this.data = data;
  }

  /**
   * to export @var data in excel format
   * @param fileName 
   */
  public export(fileName: string) {
    if (!this.data) {
      throw Error('Please first use setExportData');
    }

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, ws, 'Sheet1');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  }
}
