import { PDFReport } from "./PDFReport";
import { ExcelReport } from "./ExcelReport";

export interface IWeatherReport {
    toPDF(): PDFReport;
    toExcel(): ExcelReport;
}