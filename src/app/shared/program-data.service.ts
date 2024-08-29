import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course, ExanValues, poutCome, Programoutcomrs } from './model';

@Injectable({
  providedIn: 'root'
})
export class ProgramDataService {
  private courses: Course[] = [
    {
      "code": "MV013I",
      "name": "Masters in Science - Software Engineering",
      "description": "The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you. The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you.  The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you. The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you.",
      "image": "second.png",
      "batch": [
        {
          "batch": "2023-2025",
          "programattanment": "70",
          "evaluation": "5",
          "courseProgress": [
            {
              "complete": 23,
              "inprogress": 35,
              "yetToStart": 42
            }
          ],
          "tabledata": [
            {
              "poseries": "PO1",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "70",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 23,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            {
              "poseries": "PO2",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "30",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 73,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            {
              "poseries": "PO3",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "50",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 56,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            
            
          ]
        },
        {
          "batch": "2024-2027",
          "programattanment": "40",
          "evaluation": "5",
          "courseProgress": [
            {
              "complete": 23,
              "inprogress": 35,
              "yetToStart": 42
            }
          ],
          "tabledata": [
            {
              "poseries": "PO1",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "80",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 23,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            {
              "poseries": "PO2",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "30",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 73,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            {
              "poseries": "PO3",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "50",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 56,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            
            
          ]
        },
       
        
      ]
    },
    {
      "code": "MV012H",
      "name": "Masters in Business Administration",
      "description": "The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you. The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you.  The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you. The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you.",
      "image": "mba.png",
      "batch": [
        {
          "batch": "2023-2025",
          "programattanment": "70",
          "evaluation": "5",
          "courseProgress": [
            {
              "complete": 23,
              "inprogress": 35,
              "yetToStart": 42
            }
          ],
          "tabledata": [
            {
              "poseries": "PO1",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "70",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 23,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            {
              "poseries": "PO2",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "30",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 73,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            {
              "poseries": "PO3",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "50",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 56,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            
            
          ]
        },
       
        
      ]
    },
    {
      "code": "MV012M",
      "name": "Bachelor of Computer Application",
      "description": "The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you. The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you.  The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you. The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you.",
      "image": "third.png",
      "batch": [
        {
          "batch": "2023-2025",
          "programattanment": "70",
          "evaluation": "5",
          "courseProgress": [
            {
              "complete": 23,
              "inprogress": 35,
              "yetToStart": 42
            }
          ],
          "tabledata": [
            {
              "poseries": "PO1",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "70",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 23,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            {
              "poseries": "PO2",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "30",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 73,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            
            {
              "poseries": "PO3",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "50",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 56,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            
            
          ]
        },
       
        {
          "batch": "2023-2025",
          "programattanment": "70",
          "evaluation": "5",
          "courseProgress": [
            {
              "complete": 23,
              "inprogress": 35,
              "yetToStart": 42
            }
          ],
          "tabledata": [
            {
              "poseries": "PO1",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "70",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 23,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            {
              "poseries": "PO2",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "30",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 73,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            
            {
              "poseries": "PO3",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "50",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 56,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            
            
          ]
        },
        {
          "batch": "2024-2027",
          "programattanment": "90",
          "evaluation": "5",
          "courseProgress": [
            {
              "complete": 23,
              "inprogress": 35,
              "yetToStart": 42
            }
          ],
          "tabledata": [
            {
              "poseries": "PO1",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "40",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 23,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            {
              "poseries": "PO2",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "30",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 73,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            
            {
              "poseries": "PO3",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "50",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 56,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            
            
          ]
        },
      ]
    },
    {
      "code": "MV0133R",
      "name": "Masters in Computer Application",
      "description": "The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you. The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you.  The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you. The MBA (Global) provides the opportunity to study for our MBA wherever you are, and at times that suit you.",
      "image": "fourth.png",
      "batch": [
        {
          "batch": "2021-2023",
          "programattanment": "50",
          "evaluation": "5",
          "courseProgress": [
            {
              "complete": 23,
              "inprogress": 35,
              "yetToStart": 42
            }
          ],
          "tabledata": [
            {
              "poseries": "PO1",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "60",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 23,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            {
              "poseries": "PO2",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "30",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 73,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            
            {
              "poseries": "PO3",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "50",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 56,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            
            
          ]
        },
       
        {
          "batch": "2023-2025",
          "programattanment": "60",
          "evaluation": "5",
          "courseProgress": [
            {
              "complete": 23,
              "inprogress": 35,
              "yetToStart": 42
            }
          ],
          "tabledata": [
            {
              "poseries": "PO1",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "70",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 23,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            {
              "poseries": "PO2",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "30",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 73,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            
            {
              "poseries": "PO3",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "50",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 56,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            
            
          ]
        },
        {
          "batch": "2024-2027",
          "programattanment": "90",
          "evaluation": "5",
          "courseProgress": [
            {
              "complete": 23,
              "inprogress": 35,
              "yetToStart": 42
            }
          ],
          "tabledata": [
            {
              "poseries": "PO1",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "40",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 23,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            {
              "poseries": "PO2",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "30",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 73,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            
            {
              "poseries": "PO3",
              "programoutcome": "Problem Solving Skill",
              "programattanment": "50",
              "evaluation": "5",
              "courseProgress": [
                {
                  "complete": 56,
                  "inprogress": 35,
                  "yetToStart": 42
                }
              ],
            
            },
            
            
          ]
        },
      ]
    },
  ];
  
  private outcomeData:  Programoutcomrs[] = [
   { 
    "programcode":'MV012H',
    "coursecode": [
    {
      "title": "PEO-1",
      "subtitle": "Employability",
      "description": "This PEO aims to ensure that students grasp the fundamentals of programming and develop problem-solving skills.",
      
    },
    {
      "title": "PEO-2",
      "subtitle": "Employability",
      "description": "This PEO aims to ensure that students grasp the fundamentals of programming and develop problem-solving skills.",
      
    },
    {
      "title": "PEO-3",
      "subtitle": "Employability",
      "description": "This PEO aims to ensure that students grasp the fundamentals of programming and develop problem-solving skills.",
      
    },
    {
      "title": "PEO-4",
      "subtitle": "Employability",
      "description": "This PEO aims to ensure that students grasp the fundamentals of programming and develop problem-solving skills.",
      
    },
    
   ]
  },
  { 
    "programcode":'MV013I',
    "coursecode": [
    {
      "title": "PEO-1",
      "subtitle": "Employability",
      "description": "This PEO aims to ensure that students grasp the fundamentals of programming and develop problem-solving skills.",
      
    },
    {
      "title": "PEO-2",
      "subtitle": "Employability",
      "description": "This PEO aims to ensure that students grasp the fundamentals of programming and develop problem-solving skills.",
      
    },
    
   ]
  },
  { 
    "programcode":'MV012M',
    "coursecode": [
    {
      "title": "PEO-1",
      "subtitle": "Employability",
      "description": "This PEO aims to ensure that students grasp the fundamentals of programming and develop problem-solving skills.",
      
    },
    {
      "title": "PEO-2",
      "subtitle": "Employability",
      "description": "This PEO aims to ensure that students grasp the fundamentals of programming and develop problem-solving skills.",
      
    },
    
   ]
  },
  { 
    "programcode":'MV0133R',
    "coursecode": [
    {
      "title": "PEO-1",
      "subtitle": "Employability",
      "description": "This PEO aims to ensure that students grasp the fundamentals of programming and develop problem-solving skills.",
      
    },
    {
      "title": "PEO-2",
      "subtitle": "Employability",
      "description": "This PEO aims to ensure that students grasp the fundamentals of programming and develop problem-solving skills.",
      
    },
    
   ]
  },
  { 
    "programcode":'MV013N',
    "coursecode": [
    {
      "title": "PEO-1",
      "subtitle": "Employability",
      "description": "This PEO aims to ensure that students grasp the fundamentals of programming and develop problem-solving skills.",
      
    },
    {
      "title": "PEO-2",
      "subtitle": "Employability",
      "description": "This PEO aims to ensure that students grasp the fundamentals of programming and develop problem-solving skills.",
      
    },
    
   ]
  } 
  
  ];

  private expandvalues: poutCome[] = [
        {
          "title":"PEO-1", 
          "poTitle": "Decision Making Skill",
          "description": "Application of tools & techniques relevant to management theories and practices in analyzing & solving business issues.",
          "percentage": 80,
          "evaluation": "5",
          "mapped": "PEO 5, PEO 8",
          "courseDetails": [
            {
              "courseName": "Quantitative techniques",
              "courseCode": "BA3102",
              "type": "Program Elective",
              "sem": 'I',
              "map": 'PEO 5, PEO 8',
              "credit": {
                "Lecture": 3,
                "Tutorial": 1,
                "Practical": 1,
                "Project": 0
              },
              "co": [
                {
                  "title": "CO1",
                  "evaluation": "5",
                  "percentage": 20,
                  "description": "To understand, develop and apply the problem solving techniques to calculate probabilities."
                } 
                ,{
                  "title": "CO2",
                  "evaluation": "5",
                  "percentage": 50,
                  "description": "To understand, develop and apply the problem solving techniques to calculate probabilities."
                },{
                  "title": "CO3",
                  "evaluation": "5",
                  "percentage": 90,
                  "description": "To understand, develop and apply the problem solving techniques to calculate probabilities."
                }
              ],
              "evaluationReport": [
                {
                  "totalStudent": {
                    "middle": 30,
                    "good": 40,
                    "excellent": 20
                  },
                  "mark": 75,
                  "progress": {
                    "assessment": {
                      "complete": 50,
                      "pending": 20,
                      "total": 70
                    },
                    "quiz": {
                      "complete": 30,
                      "pending": 40,
                      "total": 70
                    },
                    "presentation": {
                      "complete": 40,
                      "pending": 10,
                      "total": 50
                    },
                    "lab": {
                      "complete": 90,
                      "pending": 10,
                      "total": 100
                    },
                    "viva": {
                      "complete": 60,
                      "pending": 40,
                      "total": 100
                    }
                  },
                  "attendance": [40,20,48,70,39]
                }
              ]
            },
            {
              "courseName": "Quantitative techniques",
              "courseCode": "BA3102",
              "type": "Program Elective",
              "sem": 'I',
              "map": 'PEO 5, PEO 8',
              "credit": {
                "Lecture": 3,
                "Tutorial": 1,
                "Practical": 1,
                "Project": 0
              },
              "co": [
                {
                  "title": "CO1",
                  "evaluation": "5",
                  "percentage": 20,
                  "description": "To understand, develop and apply the problem solving techniques to calculate probabilities."
                } 
                ,{
                  "title": "CO2",
                  "evaluation": "5",
                  "percentage": 50,
                  "description": "To understand, develop and apply the problem solving techniques to calculate probabilities."
                },{
                  "title": "CO3",
                  "evaluation": "5",
                  "percentage": 90,
                  "description": "To understand, develop and apply the problem solving techniques to calculate probabilities."
                }
              ],
              "evaluationReport": [
                {
                  "totalStudent": {
                    "middle": 30,
                    "good": 40,
                    "excellent": 20
                  },
                  "mark": 75,
                  "progress": {
                    "assessment": {
                      "complete": 50,
                      "pending": 20,
                      "total": 70
                    },
                    "quiz": {
                      "complete": 30,
                      "pending": 40,
                      "total": 70
                    },
                    "presentation": {
                      "complete": 40,
                      "pending": 10,
                      "total": 50
                    },
                    "lab": {
                      "complete": 90,
                      "pending": 10,
                      "total": 100
                    },
                    "viva": {
                      "complete": 60,
                      "pending": 40,
                      "total": 100
                    }
                  },
                  "attendance": [40,20,48,70,39]
                }
              ]
            }
          ]
        },
        {
          "title":"PEO-2", 
          "poTitle": "Decision Making Skill",
          "description": "Application of tools & techniques relevant to management theories and practices in analyzing & solving business issues.",
          "percentage": 80,
          "evaluation": "5",
          "mapped": "PEO 5, PEO 8",
          "courseDetails": [
            {
              "courseName": "Quantitative techniques",
              "courseCode": "BA3102",
              "type": "Program Elective",
              "sem": 'I',
              "map": 'PEO 5, PEO 8',
              "credit": {
                "Lecture": 3,
                "Tutorial": 1,
                "Practical": 1,
                "Project": 0
              },
              "co": [
                {
                  "title": "CO1",
                  "evaluation": "5",
                  "percentage": 20,
                  "description": "To understand, develop and apply the problem solving techniques to calculate probabilities."
                } 
                ,{
                  "title": "CO2",
                  "evaluation": "5",
                  "percentage": 50,
                  "description": "To understand, develop and apply the problem solving techniques to calculate probabilities."
                },{
                  "title": "CO3",
                  "evaluation": "5",
                  "percentage": 90,
                  "description": "To understand, develop and apply the problem solving techniques to calculate probabilities."
                }
              ],
              "evaluationReport": [
                {
                  "totalStudent": {
                    "middle": 30,
                    "good": 40,
                    "excellent": 20
                  },
                  "mark": 75,
                  "progress": {
                    "assessment": {
                      "complete": 50,
                      "pending": 20,
                      "total": 70
                    },
                    "quiz": {
                      "complete": 30,
                      "pending": 40,
                      "total": 70
                    },
                    "presentation": {
                      "complete": 40,
                      "pending": 10,
                      "total": 50
                    },
                    "lab": {
                      "complete": 90,
                      "pending": 10,
                      "total": 100
                    },
                    "viva": {
                      "complete": 60,
                      "pending": 40,
                      "total": 100
                    }
                  },
                  "attendance": [40,20,48,70,39]
                }
              ]
            }
          ]
        },
        {
          "title":"PEO-2", 
          "poTitle": "Decision Making Skill",
          "description": "Application of tools & techniques relevant to management theories and practices in analyzing & solving business issues.",
          "percentage": 30,
          "evaluation": "5",
          "mapped": "PEO 5, PEO 8",
          "courseDetails": [
            {
              "courseName": "Quantitative techniques",
              "courseCode": "BA3172",
              "type": "Program Elective",
              "sem": 'I',
              "map": 'PEO 5, PEO 8',
              "credit": {
                "Lecture": 3,
                "Tutorial": 1,
                "Practical": 1,
                "Project": 0
              },
              "co": [
                {
                  "title": "CO1",
                  "evaluation": "5",
                  "percentage": 20,
                  "description": "To understand, develop and apply the problem solving techniques to calculate probabilities."
                } 
                ,{
                  "title": "CO2",
                  "evaluation": "5",
                  "percentage": 50,
                  "description": "To understand, develop and apply the problem solving techniques to calculate probabilities."
                },{
                  "title": "CO3",
                  "evaluation": "5",
                  "percentage": 90,
                  "description": "To understand, develop and apply the problem solving techniques to calculate probabilities."
                }
              ],
              "evaluationReport": [
                {
                  "totalStudent": {
                    "middle": 30,
                    "good": 40,
                    "excellent": 20
                  },
                  "mark": 75,
                  "progress": {
                    "assessment": {
                      "complete": 50,
                      "pending": 20,
                      "total": 70
                    },
                    "quiz": {
                      "complete": 30,
                      "pending": 40,
                      "total": 70
                    },
                    "presentation": {
                      "complete": 40,
                      "pending": 10,
                      "total": 50
                    },
                    "lab": {
                      "complete": 90,
                      "pending": 10,
                      "total": 100
                    },
                    "viva": {
                      "complete": 60,
                      "pending": 40,
                      "total": 100
                    }
                  },
                  "attendance": [40,20,48,70,39]
                }
              ]
            }
          ]
        },
        {
          "title":"PEO-3", 
          "poTitle": "Decision Making Skill",
          "description": "Application of tools & techniques relevant to management theories and practices in analyzing & solving business issues.",
          "percentage": 80,
          "evaluation": "5",
          "mapped": "PEO 5, PEO 8",
          "courseDetails": [
            {
              "courseName": "Quantitative techniques",
              "courseCode": "BA3102",
              "type": "Program Elective",
              "sem": 'I',
              "map": 'PEO 5, PEO 8',
              "credit": {
                "Lecture": 3,
                "Tutorial": 1,
                "Practical": 1,
                "Project": 0
              },
              "co": [
                {
                  "title": "CO1",
                  "evaluation": "5",
                  "percentage": 20,
                  "description": "To understand, develop and apply the problem solving techniques to calculate probabilities."
                } 
                ,{
                  "title": "CO2",
                  "evaluation": "5",
                  "percentage": 50,
                  "description": "To understand, develop and apply the problem solving techniques to calculate probabilities."
                },{
                  "title": "CO3",
                  "evaluation": "5",
                  "percentage": 90,
                  "description": "To understand, develop and apply the problem solving techniques to calculate probabilities."
                }
              ],
              "evaluationReport": [
                {
                  "totalStudent": {
                    "middle": 30,
                    "good": 40,
                    "excellent": 20
                  },
                  "mark": 75,
                  "progress": {
                    "assessment": {
                      "complete": 50,
                      "pending": 20,
                      "total": 70
                    },
                    "quiz": {
                      "complete": 30,
                      "pending": 40,
                      "total": 70
                    },
                    "presentation": {
                      "complete": 40,
                      "pending": 10,
                      "total": 50
                    },
                    "lab": {
                      "complete": 90,
                      "pending": 10,
                      "total": 100
                    },
                    "viva": {
                      "complete": 60,
                      "pending": 40,
                      "total": 100
                    }
                  },
                  "attendance": [40,20,48,70,39]
                }
              ]
            }
          ]
        },
  ]

  constructor() { }

  getCourses(): Observable<Course[]> {
    return of(this.courses); 
  }

  getoutcome(): Observable<Programoutcomrs[]> {
    return of(this.outcomeData); 
  } 
  
  expanValues(): Observable<poutCome[]> {
    return of(this.expandvalues); 
  }
}
