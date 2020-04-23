import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (args.includes('name')) {
      const [, conditionValue] = args;
      console.log(args);
      console.log(conditionValue);

      value = value.filter(item => item.name === conditionValue);
    }

    console.log(value);


    if (args.includes('age')) {
      const compareSymbol = args[args.indexOf('age') + 1];
      console.log(compareSymbol);
      const conditionValue = args[args.indexOf('age') + 2];
      console.log(conditionValue);

      switch (compareSymbol) {
        case '>':
          value = value.filter(item => item.age > conditionValue);
          break;
        case '<':
          value = value.filter(item => item.age < conditionValue);
          break;
        case '=':
          value = value.filter(item => item.age === conditionValue);
          break;
      }

    }

    console.log(value);

    if (args.includes('car')) {
      const [, conditionValue] = args;
      console.log(conditionValue);
      console.log(args);

      value = value.filter(item => item.car === conditionValue);
    }

    console.log(value);

    return value;
  }

}
