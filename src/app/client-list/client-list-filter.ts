import { Injectable, Pipe, PipeTransform }  from '@angular/core';
import { ClientListService } from '../services/client-list.service';

import { Client } from '../models';


@Pipe({
   name: 'clientNameFilter'
})

@Injectable()
export class ClientListFilter implements PipeTransform{
   transform(clients: Client[] , args: any[]): any {
      return clients.filter(clients => clients.email.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
   }

}
