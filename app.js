let data = [
    {
      Index: 1,
      "Living Space": 2222,
      Beds: 3,
      Baths: 3.5,
      Zip: 32312,
      Year: 1981,
      "List Price": 250000,
    },
    {
      Index: 2,
      "Living Space": 1628,
      Beds: 3,
      Baths: 2,
      Zip: 32308,
      Year: 2009,
      "List Price": 185000,
    },
    {
      Index: 3,
      "Living Space": 3824,
      Beds: 5,
      Baths: 4,
      Zip: 32312,
      Year: 1954,
      "List Price": 399000,
    },
    {
      Index: 4,
      "Living Space": 1137,
      Beds: 3,
      Baths: 2,
      Zip: 32309,
      Year: 1993,
      "List Price": 150000,
    },
    {
      Index: 5,
      "Living Space": 3560,
      Beds: 6,
      Baths: 4,
      Zip: 32309,
      Year: 1973,
      "List Price": 315000,
    },
    {
      Index: 6,
      "Living Space": 2893,
      Beds: 4,
      Baths: 3,
      Zip: 32312,
      Year: 1994,
      "List Price": 699000,
    },
    {
      Index: 7,
      "Living Space": 3631,
      Beds: 4,
      Baths: 3,
      Zip: 32309,
      Year: 1996,
      "List Price": 649000,
    },
    {
      Index: 8,
      "Living Space": 2483,
      Beds: 4,
      Baths: 3,
      Zip: 32312,
      Year: 2016,
      "List Price": 399000,
    },
    {
      Index: 9,
      "Living Space": 2400,
      Beds: 4,
      Baths: 4,
      Zip: 32312,
      Year: 2002,
      "List Price": 613000,
    },
    {
      Index: 10,
      "Living Space": 1997,
      Beds: 3,
      Baths: 3,
      Zip: 32311,
      Year: 2006,
      "List Price": 295000,
    },
    {
      Index: 11,
      "Living Space": 2097,
      Beds: 4,
      Baths: 3,
      Zip: 32311,
      Year: 2016,
      "List Price": 290000,
    },
    {
      Index: 12,
      "Living Space": 3200,
      Beds: 5,
      Baths: 4,
      Zip: 32312,
      Year: 1964,
      "List Price": 465000,
    },
    {
      Index: 13,
      "Living Space": 4892,
      Beds: 5,
      Baths: 6,
      Zip: 32311,
      Year: 2005,
      "List Price": 799900,
    },
    {
      Index: 14,
      "Living Space": 1128,
      Beds: 2,
      Baths: 1,
      Zip: 32303,
      Year: 1955,
      "List Price": 89000,
    },
    {
      Index: 15,
      "Living Space": 1381,
      Beds: 3,
      Baths: 2,
      Zip: 32301,
      Year: 2006,
      "List Price": 143000,
    },
    {
      Index: 16,
      "Living Space": 4242,
      Beds: 4,
      Baths: 5,
      Zip: 32303,
      Year: 2007,
      "List Price": 569000,
    },
    {
      Index: 17,
      "Living Space": 2533,
      Beds: 3,
      Baths: 2,
      Zip: 32310,
      Year: 1991,
      "List Price": 365000,
    },
    {
      Index: 18,
      "Living Space": 1158,
      Beds: 3,
      Baths: 2,
      Zip: 32303,
      Year: 1993,
      "List Price": 155000,
    },
    {
      Index: 19,
      "Living Space": 2497,
      Beds: 4,
      Baths: 4,
      Zip: 32309,
      Year: 1990,
      "List Price": 289000,
    },
    {
      Index: 20,
      "Living Space": 4010,
      Beds: 5,
      Baths: 3,
      Zip: 32309,
      Year: 2002,
      "List Price": 549900,
    },
];

let header = [
  "Index",
  "Living Space",
  "Beds",
  "Baths",
  "Zip",
  "Year",
  "List Price",
];
 

const createTable = (dataSorted) => {
    let tableBox = document.querySelector('.table');
    tableBox.innerHTML = "";
    let table = document.createElement('table');
    tableBox.innerHTML = ''
    // Cell names
    let headerRow = document.createElement("tr");
    header.forEach(text => {
        let headerText = document.createElement('th');
        headerText.innerText = text;
        headerText.setAttribute('onclick', `sortCol("${text}")`)
        headerRow.appendChild(headerText);
        table.appendChild(headerRow);
    });

    // Data to table
    dataSorted.forEach(item => {
      let dataRow = document.createElement("tr");
        for (const key in item) {
            let dataText = document.createElement("td");
            dataText.innerText = item[key];
            dataRow.appendChild(dataText);
            table.appendChild(dataRow)
        }
    })
    tableBox.appendChild(table);
}

createTable(data);


let sortDirection = false;
const sortCol = header => {
    sortDirection = !sortDirection;
    console.log(header)
    const dataType = typeof(data[0][header]);
    switch (dataType) {
        case 'number':
            sortNumberCol(sortDirection, header);
            break;
        case 'string':
            sortStringCol(sortDirection, header)
            break;
    }
};  

const sortNumberCol = (sort, header) => {
    data = data.sort((a, b) => {
        return sort ? a[header] - b[header] : b[header] - a[header];
    });
    createTable(data)
}
