var a = [
  {
    nodeId: "1",
    parentNodeId: null,
    name: "Hefelfinger Family",
    tag: "PARENT",
    perc: 20,
    width: 348,
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: { red: 15, green: 140, blue: 121, alpha: 1 },
    backgroundColor: { red: 51, green: 182, blue: 208, alpha: 1 },
    nodeImage: {
      url:
        "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
      width: 100,
      height: 100,
      centerTopDistance: 0,
      centerLeftDistance: 0,
      cornerShape: "CIRCLE",
      shadow: false,
      borderWidth: 0,
      borderColor: { red: 19, green: 123, blue: 128, alpha: 1 }
    },
    nodeIcon: { icon: "https://to.ly/1yZnX", size: 30 },
    template:
      '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         ">Ian Devling </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">Cheaf Executive Officer  </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         ">Business first</div>\n\n                 <div style="margin-left:196px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CTO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
    connectorLineColor: { red: 220, green: 189, blue: 207, alpha: 1 },
    connectorLineWidth: 5,
    dashArray: "",
    expanded: false,
    directSubordinates: 4,
    totalSubordinates: 1515
  },
  {
    nodeId: "2",
    name: "Abagail Hafelfinger",
    tag: "CHILD-1",
    parentNodeId: "1",
    perc: 23,
    width: 348,
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: { red: 15, green: 140, blue: 121, alpha: 1 },
    backgroundColor: { red: 51, green: 182, blue: 208, alpha: 1 },
    nodeImage: {
      url:
        "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      width: 100,
      height: 100,
      centerTopDistance: 0,
      centerLeftDistance: 0,
      cornerShape: "CIRCLE",
      shadow: false,
      borderWidth: 0,
      borderColor: { red: 19, green: 123, blue: 128, alpha: 1 }
    },
    nodeIcon: { icon: "https://to.ly/1yZnX", size: 30 },
    template:
      '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         ">Davolio Nancy </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">CTO  </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         ">Business one</div>\n\n                 <div style="margin-left:190.5px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CEO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
    connectorLineColor: { red: 220, green: 189, blue: 207, alpha: 1 },
    connectorLineWidth: 5,
    dashArray: "",
    expanded: false,
    directSubordinates: 9,
    totalSubordinates: 812
  },
  {
    name: "Byrnes Foundation",
    tag: "CHILD-1",
    nodeId: "3",
    parentNodeId: "1",
    width: 348,
    height: 150,
    perc: 26,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: { red: 15, green: 140, blue: 121, alpha: 1 },
    backgroundColor: { red: 51, green: 182, blue: 208, alpha: 1 },
    nodeImage: {
      url:
        "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg",
      width: 100,
      height: 100,
      centerTopDistance: 0,
      centerLeftDistance: 0,
      cornerShape: "ORIGINAL",
      shadow: false,
      borderWidth: 0,
      borderColor: { red: 19, green: 123, blue: 128, alpha: 1 }
    },
    nodeIcon: { icon: "https://to.ly/1yZnX", size: 30 },
    template:
      '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         "> Leverling Janet </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">CTO  </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         ">Business two </div>\n\n                 <div style="margin-left:199px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CEO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
    connectorLineColor: { red: 220, green: 189, blue: 207, alpha: 1 },
    connectorLineWidth: 5,
    dashArray: "",
    expanded: false,
    directSubordinates: 3,
    totalSubordinates: 413
  },
  {
    name: "Byrnes Brokerage",
    tag: "LEFT",
    nodeId: "4",
    parentNodeId: "2",

    perc: 53,
    width: 348,
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: { red: 15, green: 140, blue: 121, alpha: 1 },
    backgroundColor: { red: 51, green: 182, blue: 208, alpha: 1 },
    nodeImage: {
      url:
        "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg",
      width: 100,
      height: 100,
      centerTopDistance: 0,
      centerLeftDistance: 0,
      cornerShape: "ROUNDED",
      shadow: false,
      borderWidth: 0,
      borderColor: { red: 19, green: 123, blue: 128, alpha: 1 }
    },
    nodeIcon: { icon: "https://to.ly/1yZnX", size: 30 },
    template:
      '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         "> Leverling Janet </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">CTO  </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         "> Finance Department</div>\n\n                 <div style="margin-left:185.5px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CEO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
    connectorLineColor: { red: 220, green: 189, blue: 207, alpha: 1 },
    connectorLineWidth: 5,
    dashArray: "",
    expanded: true,
    directSubordinates: 9,
    totalSubordinates: 429
  },
  {
    name: "Equity",

    perc: 89,
    tag: "LEFT",
    nodeId: "5",
    parentNodeId: "2",
    width: 348,
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: { red: 15, green: 140, blue: 121, alpha: 1 },
    backgroundColor: { red: 51, green: 182, blue: 208, alpha: 1 },
    nodeImage: {
      url:
        "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      width: 100,
      height: 100,
      centerTopDistance: 0,
      centerLeftDistance: 0,
      cornerShape: "ROUNDED",
      shadow: false,
      borderWidth: 0,
      borderColor: { red: 19, green: 123, blue: 128, alpha: 1 }
    },
    nodeIcon: { icon: "https://to.ly/1yZnX", size: 30 },
    template:
      '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         ">Fuller Andrew </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">Linear Manager </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         ">Marketing Department</div>\n\n                 <div style="margin-left:189.5px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CEO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
    connectorLineColor: { red: 220, green: 189, blue: 207, alpha: 1 },
    connectorLineWidth: 5,
    dashArray: "",
    expanded: false,
    directSubordinates: 9,
    totalSubordinates: 159
  },
  {
    name: " Leverling Janet",
    tag: "RIGHT",
    nodeId: "6",
    parentNodeId: "3",
    perc: 60,
    width: 348,
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: { red: 15, green: 140, blue: 121, alpha: 1 },
    backgroundColor: { red: 51, green: 182, blue: 208, alpha: 1 },
    nodeImage: {
      url:
        "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      width: 100,
      height: 100,
      centerTopDistance: 0,
      centerLeftDistance: 0,
      cornerShape: "ROUNDED",
      shadow: false,
      borderWidth: 0,
      borderColor: { red: 19, green: 123, blue: 128, alpha: 1 }
    },
    nodeIcon: { icon: "https://to.ly/1yZnX", size: 30 },
    template:
      '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         ">Peacock Margaret </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">CEO </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         ">HR Department</div>\n\n                 <div style="margin-left:195px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CEO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
    connectorLineColor: { red: 220, green: 189, blue: 207, alpha: 1 },
    connectorLineWidth: 5,
    dashArray: "",
    expanded: false,
    directSubordinates: 9,
    totalSubordinates: 24
  },
  {
    name: "Sven Petersen",
    tag: "RIGHT",
    nodeId: "7",

    perc: 90,
    parentNodeId: "3",
    width: 348,
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: { red: 15, green: 140, blue: 121, alpha: 1 },
    backgroundColor: { red: 51, green: 182, blue: 208, alpha: 1 },
    nodeImage: {
      url:
        "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      width: 100,
      height: 100,
      centerTopDistance: 0,
      centerLeftDistance: 0,
      cornerShape: "ROUNDED",
      shadow: false,
      borderWidth: 0,
      borderColor: { red: 19, green: 123, blue: 128, alpha: 1 }
    },
    nodeIcon: { icon: "https://to.ly/1yZnX", size: 30 },
    template:
      '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         ">Buchanan Steven </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">Head of direction </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         ">Facility Management</div>\n\n                 <div style="margin-left:179px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CEO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
    connectorLineColor: { red: 220, green: 189, blue: 207, alpha: 1 },
    connectorLineWidth: 5,
    dashArray: "",
    expanded: false,
    directSubordinates: 9,
    totalSubordinates: 136
  }
];

export default a;
