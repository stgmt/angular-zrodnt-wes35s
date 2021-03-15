import { Pipe, PipeTransform } from "@angular/core";

/*
 * Convert bytes into largest possible unit.
 * Support bytes, KB, MB, GB, TB units
 * Takes a precision argument that defaults to 2.
 * Usage:
 *   bytes | fileSize:precision
 * Example:
 *   {{ 2048 | fileSize}}
 *   should format to: 2.00 KB
 */

const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB'];

@Pipe({ name: "fileSize" })
export class FileSizePipe implements PipeTransform {
  transform(bytes: number = 0, precision: number = 2): string {
    const units = FILE_SIZE_UNITS;
    let power = Math.round(Math.log(bytes) / Math.log(1024));
    power = Math.min(power, units.length - 1);

    const size = bytes / Math.pow(1024, power); 
    const formattedSize = Math.round(size * 100) / 100;
    const unit = units[power];
    return `${formattedSize} ${unit}`;
  }

}
