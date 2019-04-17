export const showAlert = () => {
    alert("HEY!!!!");
}

export const formatSeleniumTestReport = () => {
    let failList = [];
    let failures = document.querySelectorAll("td.numi_attn:nth-of-type(5)");
    failures.forEach((td) => {
        failList.push(td.parentElement.firstElementChild.textContent);
    });
    if (failList[failList.length - 1] === "Total") {
        let trash = failList.pop();
    };
    let containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "errorList");
    let errorTable = document.createElement("table");
    errorTable.setAttribute("id", "errorListTable");
    errorTable.style.border = "2px black solid";
    errorTable.style.margin = "40px";
    containerDiv.appendChild(errorTable);
    {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = "<b>Number of failing tests: " + failList.length + "</b>";
        tr.appendChild(td);
        errorTable.appendChild(tr);
    } failList.forEach((text) => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
        errorTable.appendChild(tr);
    });
    let skipList = [];
    let skips = document.querySelectorAll("td.numi_attn:nth-of-type(4)");
    skips.forEach((td) => {
        skipList.push(td.parentElement.firstElementChild.textContent);
    });
    if (skipList[skipList.length - 1] === "Total") {
        let trash = skipList.pop();
    };
    {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = "<hr>";
        tr.appendChild(td);
        errorTable.appendChild(tr);
    } {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = "<b>Number of skipped tests: " + skipList.length + "</b>";
        tr.appendChild(td);
        errorTable.appendChild(tr);
    } skipList.forEach((text) => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
        errorTable.appendChild(tr);
    });
    document.body.insertBefore(containerDiv, document.body.firstChild);
    (() => {
        let url = window.location.pathname;
        let filename = url.substring(url.lastIndexOf('/') + 1);
        document.title = filename;
    })();
    let links = document.querySelectorAll("a");
    links.forEach((link) => {
        link.href = "#" + link.href.split("#")[1];
    });

}
export const formatSeleniumTestReportForJira = () => {
    let tds = document.querySelectorAll("#errorListTable td");
    tds.forEach((td) => {
        td.textContent = `|${td.textContent}|`;
    });
}

export const createFailingTestTask = () => {
    let times = 0;
    let timeoutHelper = () => {
        times++;
        if (times > 30) {
            return;
        } if (document.querySelector("#create-subtask-dialog")) {
            let testName = prompt("Enter Test Name");
            let summary = document.querySelector("#summary");
            let description = document.querySelector("#description");
            summary.value = testName + " Failure";
            description.value = testName + " is failing. Please investigate and fix if able; Otherwise, raise the issue.";
        } else {
            setTimeout(() => {
                timeoutHelper();
            }, 1000);
        }
    };
    document.querySelector(".issueaction-create-subtask").click();
    setTimeout(() => {
        timeoutHelper();
    }, 1000);


}

export const formatJestTest = () => {
    /* --- Skipped Tests --- */
    let skipList = [];
    let skipped = document.querySelectorAll(".pending .suite");
    skipped.forEach((td) => {
        skipList.push(td.parentElement.firstElementChild.textContent);
    });
    if (skipList[skipList.length - 1] === "Total") {
        let trash = skipList.pop();
    };
    let containerDiv2 = document.createElement("div");
    containerDiv2.setAttribute("id", "skipList");
    let skipTable = document.createElement("table");
    skipTable.setAttribute("id", "skipListTable");
    skipTable.style.border = "4px black solid";
    skipTable.style.margin = "40px";
    containerDiv2.appendChild(skipTable);
    let heading2 = document.createElement("h4");
    heading2.textContent = "Skipped Tests";
    heading2.style.color = "yellow";
    heading2.style.backgroundColor = "black";
    skipTable.appendChild(heading2);
    skipList.forEach((text) => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
        skipTable.appendChild(tr);
    });
    document.body.insertBefore(containerDiv2, document.body.firstChild);
    /* Failing Tests */
    let failList = [];
    let failures = document.querySelectorAll(".failed .suite");
    failures.forEach((td) => {
        failList.push(td.parentElement.firstElementChild.textContent);
    });
    if (failList[failList.length - 1] === "Total") {
        let trash = failList.pop();
    };
    let containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "errorList");
    let errorTable = document.createElement("table");
    errorTable.setAttribute("id", "errorListTable");
    errorTable.style.border = "4px black solid";
    errorTable.style.margin = "40px";
    containerDiv.appendChild(errorTable);
    let heading = document.createElement("h4");
    heading.textContent = "Failed Tests";
    heading.style.color = "red";
    heading.style.backgroundColor = "black";
    errorTable.appendChild(heading);
    failList.forEach((text) => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
        errorTable.appendChild(tr);
    });
    document.body.insertBefore(containerDiv, document.body.firstChild);

}