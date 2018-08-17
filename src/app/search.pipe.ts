import { Pipe, PipeTransform } from '@angular/core';   //pipe is a decorator

@Pipe({
    name: 'search'                                //used in header.html file
})
export class SearchPipe implements PipeTransform {    //transform input to a desired output
    transform(value: any, term: string) {         //Value-Stores tableData(array of all obj), term-text searched in search box
        if (term == '' || term == undefined) {
            return value;
        } else {
            return value.filter(element=>{          //returns elements which satisfies condition
                if(element.name.toLowerCase().includes(term.toLowerCase())){  //if term.toLowerCase is present in element.name.toLowerCase --> it will show the result accordingly 
                    return element;
                }
            })
        }
    }
}