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

// Sorting

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
    pagination(1);
}

const sortStringCol = (sort, header) => {
    data = data.sort((a, b) => {
        return sort ? (a[header] > b[header]) - (a[header] < b[header]) : (b[header] > a[header]) - (b[header] < a[header])
    });
    pagination(1);
}

let searchBtn = document.querySelector('.search-btn');
let input = document.querySelector('.search-bar');
searchBtn.addEventListener('click', () => {
    let newData = []
    if (input.value == '') {
        pagination(1); 
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


// Pagination

let pageNum = document.querySelector('.page-number');
let nextBtn = document.querySelector('.next');
let previousBtn = document.querySelector('.previous');
let numItems = 10;

const selectOption = () => {
    let dropdown = document.querySelector('#items');
    let selectedIndex = dropdown.selectedIndex;
    let selectedValue = dropdown.options[selectedIndex].value;
    numItems = parseInt(selectedValue);
    pagination(1);
};

const pagination = (index) => {
    let len = index * numItems;
    let base = (index - 1) * numItems;
    let pagData = []
    pageNum.innerText = index;

    for (let i = base; i < len; i++) {
        pagData.push(data[i]);
    }
    createTable(pagData)
};
pagination(1);

nextBtn.addEventListener('click', () => {
    let currentPage = parseInt(pageNum.innerText);
    
    if (parseInt(pageNum.innerText) <= (~~(data.length / numItems))) {
        pageNum.innerText = currentPage + 1;
        pagination(pageNum.innerText) 
    }
});

previousBtn.addEventListener('click', () => {
    let currentPage = parseInt(pageNum.innerText);
    if (currentPage > 1) {
        pageNum.innerText = currentPage - 1;
        pagination(pageNum.innerText);
    };
});




