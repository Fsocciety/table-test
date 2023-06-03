let sortDirection = true;

const createTable = (editedData) => {
    let tableBox = document.querySelector('.table');
    tableBox.innerHTML = "";
    let table = document.createElement('table');
    tableBox.innerHTML = ''
    // Cell names
    let headerRow = document.createElement("tr");
    header.forEach((text, index) => {
        let headerText = document.createElement('th');
        headerText.innerText = text;
        headerText.setAttribute('onclick', `sortCol("${text}", "${index}")`)
        headerRow.appendChild(headerText);
        table.appendChild(headerRow);
    });

    // Data to table



    editedData.forEach(item => {
        let dataRow = document.createElement("tr");
        for (const key in item) {
            let dataText = document.createElement("td");
            dataText.innerText = item[key];
            dataRow.appendChild(dataText);
            table.appendChild(dataRow);
            
        }
    })
    tableBox.appendChild(table);
}

createTable(data);
lastSortBy = 'broj';
const sortCol = (header, index) => {

    if (header == lastSortBy) {
        sortDirection = !sortDirection;
    } else {
        sortDirection = false;
    }
    lastSortBy = header;
    // sortDirection = !sortDirection;
    const dataType = typeof(data[index][header]);
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

const sortStringCol = (sort, header) => {
    data = data.sort((a, b) => {
        return sort ? (a[header] > b[header]) - (a[header] < b[header]) : (b[header] > a[header]) - (b[header] < a[header])
    });
    createTable(data)
}

let searchBtn = document.querySelector('.search-btn');
let input = document.querySelector('.search-bar');
searchBtn.addEventListener('click', () => {
    let newData = []
    if (input.value == '') {
        createTable(data)
    } else {
        data.forEach((item, index) => {
            for (const i in item) {
                if (data[index][i].toString().toLowerCase() == input.value.toLowerCase()) {
                    newData.push(data[index]);
                }
            }
        });
        createTable(newData);
    }
});





















    // let count = 0;
    // let i = 0;
    // let pages = [];
    // let page = [];
    // editedData.forEach(item => {
    //     page.push(item)
    //     count++;
    //     if (count == 10) {
    //         pages.push(page)
    //         page = [];
    //         count = 0;
    //     }
    // });
    // pages.forEach(item => {
    //     item.forEach(i => {
    //         console.log(i)
    //     })
    // })
    // pages.forEach(page => {
    //     page.forEach(item => {
    //         let dataRow = document.createElement("tr");
    //         for (const key in item) {
    //             let dataText = document.createElement("td");
    //             dataText.innerText = item[key];
    //             dataRow.appendChild(dataText);
    //             table.appendChild(dataRow);
    //         };
    //     })
    // });
    // tableBox.appendChild(table);



