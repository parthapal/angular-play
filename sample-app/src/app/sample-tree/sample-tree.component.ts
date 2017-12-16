import { Component } from '@angular/core';
import { TreeModule } from 'angular-tree-component';

@Component({
  selector: 'app-sample-tree',
  templateUrl: './sample-tree.component.html',
  styleUrls: ['./sample-tree.component.css']
})
export class SampleTreeComponent {

  nodes = [
    {
      "name": "Study 1",
      "children": [{
          "name": "Clinical Data",
          "children": [{
              "name": "AE",
              "children": [{
                  "name": "Pain",
                  "children": [{
                      "name": "Auto (2)"
                     
                  }]
              }, {
                  "name": "Hipertension",
                  "children": [{
                      "name": "Auto (3)"
                      
                  }]
              }]
          }]
      },
      {
      "name": "Subjects",
      "children": [{
          "name": "Demographics",
          "children": [{
              "name": "Gender",
              "children": [{
                  "name": "Male (10)"
                 
              },
              {
                  "name": "Female (8)"
                  
              }
          ]
          }]
      }, {
          "name": "Treatment Status",
          "children": [{
              "name": "Completed (5)"
              
          },
          {
              "name": "Wish for Pregnancy (2)"
              
          }
          ,
          {
              "name": "Adverse Event (1)"
             
          }      
      ]
      }]
      }
  ]
  },

  {
      "name": "Study 2",
      "children": [{
          "name": "Clinical Data",
          "children": [{
              "name": "BE",
              "children": [{
                  "name": "Pain",
                  "children": [{
                      "name": "Auto (4)"
                      
                  }]
              }, {
                  "name": "Hipertension",
                  "children": [{
                      "name": "Auto (6)"
                   
                  }]
              }]
          }]
      },
      {
      "name": "Subjects",
      "children": [{
          "name": "Demographics",
          "children": [{
              "name": "Gender",
              "children": [{
                  "name": "Male (20)"
                  
              },
              {
                  "name": "Female (58)"
                 
              }
          ]
          }]
      }, {
          "name": "Treatment Status",
          "children": [{
              "name": "Completed (10)"
          },
          {
              "name": "Wish for Pregnancy (12)"
          }
          ,
          {
              "name": "Adverse Event (10)"
          }      
      ]
      }]
      }
  ]
  } 
  ];
}

