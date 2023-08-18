import { PDFReport } from "./PDFReport";
import { ExcelReport } from "./ExcelReport";

export abstract class WeatherReport {
    toPDF(): PDFReport {
        // TODO: Pass data to PDF library
        return new PDFReport();
    }

    toExcel(): ExcelReport {
        // TODO: Pass data to XLS library
        return new ExcelReport();
    }
}