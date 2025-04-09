document.getElementById('fetchDataBtn').addEventListener('click', () => {
    promiseAPI1()
        .then(promiseAPI2)
        .then(promiseAPI3)
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});

async function promiseAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch("https://dummyjson.com/posts");
                const data = await response.json();
                displayData(data.posts, "Posts");
                resolve();
            } catch (error) {
                reject(error);
            }
        }, 1000);
    });
}

async function promiseAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                displayData(data.products, "Products");
                resolve();
            } catch (error) {
                reject(error);
            }
        }, 2000);
    });
}

async function promiseAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch("https://dummyjson.com/todos");
                const data = await response.json();
                displayData(data.todos, "Todos");
                resolve();
            } catch (error) {
                reject(error);
            }
        }, 3000);
    });
}

function displayData(items, category) {
    document.querySelector('button').style.display="none";
    const tableContainer = document.querySelector(".container");
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const categoryHeader = document.createElement("th");
    categoryHeader.colSpan = 2;
    categoryHeader.textContent = category;
    headerRow.appendChild(categoryHeader);
    table.appendChild(headerRow);
    // headerRow.style.border = "2px solid black";

    items.forEach(item => {
        const row = document.createElement("tr");

        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");

        cell1.textContent = item.title || item.name || item.todo;
        cell2.textContent = item.body || item.description || item.completed;

        row.appendChild(cell1);
        row.appendChild(cell2);

        table.appendChild(row);
    });

    tableContainer.appendChild(table);
}

