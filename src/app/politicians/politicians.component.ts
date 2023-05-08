import { Component } from '@angular/core';
import { IECONode, Orientation } from '../components/tree-component/econode';

@Component({
  selector: 'app-politicians',
  templateUrl: './politicians.component.html',
  styleUrls: ['./politicians.component.css']
})
export class PoliticiansComponent {

  Orientation = Orientation;

  data: IECONode = {
    data: { id: 1 },
    linkColor: 'red',
    background: 'red',
    color: 'white',
    children: [
      {
        data: { id: 2 },
        linkColor: 'pink',
        background: 'black',
        color: 'white',
        children: [
          { data: { id: 5 } },
          {
            data: { id: 6 },
            children: [
              { data: { id: 9 }, background: '#32a852' },
              { data: { id: 10 } ,
              children: [
                { data: { id: 5 } },
                {
                  data: { id: 6 },
                  children: [
                    { data: { id: 9 }, background: '#32a852' },
                    { data: { id: 10 },
                    children: [
                      { data: { id: 5 } },
                      {
                        data: { id: 6 },
                        children: [
                          { data: { id: 9 }, background: '#32a852' },
                          { data: { id: 10 } },
                        ],
                      },
                    ],
                  },
                  ],

                },
                
              ],
            },
            ],
          },
          
        ],
      },
      { data: { id: 3 } },
      {
        data: { id: 4 },
        linkColor: 'orange',
        background: 'orange',
        color: 'white',
        children: [
          { data: { id: 7 } },
          {
            data: { id: 8 },
            background: 'green',
            linkColor: 'green',
            children: [
              { data: { id: 'asas' } },
              { data: { id: 12 } },
              { data: { id: 13 } },
              {
                data: { id: 14 },
                background: 'black',
                linkColor: 'black',
                children: [{ data: { id: 16 } }],
              },
              { data: { id: 15 } },
            ],
          },
        ],
      },
    ],
  };
}
