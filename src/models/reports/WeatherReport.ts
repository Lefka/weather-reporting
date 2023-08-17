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

// At this point, I need to build the logic for storing the averages and all of that
// Then I need to actuall save the data into XLS or PDF
// I'll stop at that point most likely...