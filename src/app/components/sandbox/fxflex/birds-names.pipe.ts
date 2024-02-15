import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'birdsnames',
    pure: true
})

export class BirdsNamesPipe implements PipeTransform {
    transform(value: string, point: number = 5): any {
        if (value.length < point) return value.toUpperCase()
        return value;        
    }
}
