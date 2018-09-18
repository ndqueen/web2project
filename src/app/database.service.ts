import { Injectable } from '@angular/core';
import { Employee } from './employees/employee';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

    constructor() { }

    getEmployees(): Employee[] {
        try {
            const data = localStorage.getItem('employees');
            if (data)
                return JSON.parse(data);
            else
                return [];
        } catch (e) {
            console.log(e);
        }
  }

  save(item_name: string, item): void {
      try {
          localStorage.setItem(item_name, JSON.stringify(item));
      } catch (e) {
          console.log(e);
      }
  }
}
