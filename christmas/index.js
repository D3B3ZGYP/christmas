// const e=document.createElement("div");e.id="jssection",document.body.appendChild(e);const t=document.createElement("table");e.appendChild(t),e.classList.add("hide");const n=document.createElement("thead");t.appendChild(n);const a=document.createElement("tr");n.appendChild(a);const o=["Osztály","Manó","Műszak"];for(const e of o){const t=document.createElement("th");t.innerText=e,a.appendChild(t)}const l=[{what:"Logisztika",who1:"Kovács Máté",shift1:"Délelöttös",who2:"Kovács József",shift2:"Délutános"},{what:"Könyvelés",who1:"Szabó Anna",shift1:"Éjszakai"},{what:"Játékfejlesztés",who1:"Varga Péter",shift1:"Délutános",who2:"Nagy Eszter",shift2:"Éjszakai"}];initSelect(l);const d=document.createElement("tbody");function renderTbody(e){const t=document.getElementById("jstbody");t.innerHTML="";for(const n of e){const e=document.createElement("tr");t.appendChild(e);const a=document.createElement("td");a.innerText=n.what,e.appendChild(a);const o=document.createElement("td");o.innerText=n.who1,e.appendChild(o);const l=document.createElement("td");if(l.innerText=n.shift1,e.appendChild(l),n.who2&&n.shift2){a.rowSpan=2;const e=document.createElement("tr");t.appendChild(e);const o=document.createElement("td");o.innerText=n.who2,e.appendChild(o);const l=document.createElement("td");l.innerText=n.shift2,e.appendChild(l)}}}d.id="jstbody",t.appendChild(d),renderTbody(l);const c=undefined,i=s([{id:"osztaly",label:"Osztály",name:"osztaly"},{id:"mano1",label:"Manó 1",name:"mano1"},{id:"muszak1",label:"Manó 1 műszak",name:"muszak1",type:"select",optionList:[{value:"1",label:"Délelöttös"},{value:"2",label:"Délutános"},{value:"3",label:"Éjszakai"}]},{id:"masodikmano",label:"Két manót veszek fel",name:"masodikmano",type:"checkbox"},{id:"mano2",label:"Manó 2",name:"mano2"},{id:"muszak2",label:"Manó 2 műszak",name:"muszak2",type:"select",optionList:[{value:"1",label:"Délelöttös"},{value:"2",label:"Délutános"},{value:"3",label:"Éjszakai"}]}]);function s(e){const t=document.createElement("form");t.id="jsform";for(const n of e)m(n,t);const n=document.createElement("button");return n.innerText="Hozzaadas",t.appendChild(n),t}function m(e,t){const n=document.createElement("div");if(t.appendChild(n),e.type&&"select"!=e.type){if("checkbox"==e.type){const t=document.createElement("input");t.id=e.id,t.name=e.name,t.type="checkbox",n.appendChild(t);const a=document.createElement("label");a.innerText=e.label,a.htmlFor=e.id,n.appendChild(a)}}else{const t=document.createElement("label");if(t.innerText=e.label,t.htmlFor=e.id,n.appendChild(t),n.appendChild(document.createElement("br")),e.type){if("select"===e.type){const t=document.createElement("select");t.id=e.id,n.appendChild(t);const a=document.createElement("option");a.innerText="Válassz műszakot!",a.value="",t.appendChild(a);for(const n of e.optionList){const e=document.createElement("option");e.innerText=n.label,e.value=n.value,t.appendChild(e)}}}else{const t=document.createElement("input");t.id=e.id,t.name=e.name,n.appendChild(t),n.appendChild(document.createElement("br"))}}const a=document.createElement("span");a.classList.add("error"),n.appendChild(a)}function r(e){let t=!0;if(""==e.value){const n=undefined;e.parentElement.querySelector(".error").innerText="Kötelező elem!",t=!1}return t}i.id="jsform",e.appendChild(i),i.addEventListener("submit",function(e){e.preventDefault();const t=e.target,n=t.querySelector("#osztaly"),a=t.querySelector("#mano1"),o=t.querySelector("#muszak1"),d=t.querySelector("#mano2"),c=t.querySelector("#muszak2"),i=t.querySelector("#masodikmano"),s=n.value,m=a.value,u=o.value,h=d.value,f=c.value;p(t);const E=undefined;if(r(n)&r(a)&r(o)){const e={};e.what=s,e.who1=m,e.shift1=mapMuszak(u),i.checked&&(e.who2=h,e.shift2=mapMuszak(f)),createNewElement(e,t,l)}});const u=undefined;function p(e){const t=e.querySelectorAll(".error");for(const e of t)e.innerText=""}document.getElementById("htmlform").addEventListener("submit",function(e){e.preventDefault();const t=e.target,n=t.querySelector("#manochooser"),a=t.querySelector("#manotev1"),o=t.querySelector("#manotev2");p(t);const l=undefined;if(r(n)&r(a)){const e=document.getElementById("htmltbody"),l=document.createElement("tr");e.appendChild(l);const d=document.createElement("td");d.innerText=n.value,l.appendChild(d);const c=document.createElement("td");if(c.innerText=a.value,l.appendChild(c),o.value){const e=document.createElement("td");e.innerText=o.value,l.appendChild(e)}else c.colSpan=2;t.reset()}}),initCheckbox(document.getElementById("jsform").querySelector("#masodikmano"));

/**
 * @typedef {{osztaly: string, mano: string[], muszak: string[]}} OsztalyFelvetel
 * @typedef {{mano: string, tevekenyseg: string[]}} ManoFeladat
 * @typedef {{id: string, text: string, type: string, options?: { value: string, text: string}[]}} FieldData
 */


/**
 * @param {"td" | "th"} type
 * @param {string} text
 * @param {HTMLTableRowElement | undefined} parent
 */
function createCell(type, text, parent){
    const cell = document.createElement(type)
    cell.innerText = text

    if (parent != null)
        parent.appendChild(cell)

    return cell
}

/**
 * 
 * @param {string[]} headerArray 
 * @param {string} tableBodyId 
 * @param {string} divId 
 * @returns {void}
 */
function generateJsTable(headerArray, tableBodyId, divId){
    const div = document.body.appendChild(document.createElement("div"))
    div.id = divId

    const table = div.appendChild(document.createElement("table"))
    generateHeader(headerArray, table)

    const tbody = table.appendChild(document.createElement("tbody"))
    tbody.id = tableBodyId
}

/**
 * 
 * @param {string[]} headerArray 
 * @param {HTMLTableElement} table 
 * @returns {void}
 */
function generateHeader(headerArray, table){
    const thead = table.appendChild(document.createElement("thead"))
    const tr = thead.appendChild(document.createElement("tr"))

    for (const i of headerArray)
        createCell("th", i, tr)
}

/**
 * 
 * @param {string} tbodyId 
 * @param {OsztalyFelvetel[]} data 
 * @returns {void}
 */
function renderTbody(tbodyId, data){
    const tbody = document.getElementById(tbodyId)
    tbody.innerHTML = ""

    for (const i of data)
        renderRowspanRow(i, tbody)
}

/**
 * 
 * @param {OsztalyFelvetel} rowData 
 * @param {HTMLTableSectionElement} tbody 
 * @returns {void}
 */
function renderRowspanRow(rowData, tbody){
    const tr = tbody.appendChild(document.createElement("tr"))

    const td1 = createCell("td", rowData.osztaly, tr)
    td1.rowSpan = rowData.mano.length

    createCell("td", rowData.mano[0], tr)
    createCell("td", rowData.muszak[0], tr)

    if (rowData.mano.length == 2){
        const trNew = tbody.appendChild(document.createElement("tr"))

        createCell("td", rowData.mano[1], trNew)
        createCell("td", rowData.muszak[1], trNew)
    }
}

/**
 *
 * @param {ManoFeladat} rowData
 * @param {HTMLTableSectionElement} tbody
 * @returns {void}
 */
function renderColspanRow(rowData, tbody){
    const tr = tbody.appendChild(document.createElement("tr"))
    createCell("td", rowData.mano, tr)

    const tdTev = createCell("td", rowData.tevekenyseg[0], tr)

    if (rowData.tevekenyseg.length == 1){
        tdTev.colSpan = 2
    } else {
        createCell("td", rowData.tevekenyseg[1], tr)
    }
}

/**
 * 
 * @param {string} divId 
 * @param {FieldData[]} formData 
 * @param {string} formId 
 * @returns {void}
 */
function CreateForm(divId, formData, formId){
    const form = document.getElementById(divId).appendChild(document.createElement("form"))
    form.id = formId

    for (const i of formData)
        createInputField(i, form)

    const button = form.appendChild(document.createElement("button"))
    button.innerText = "Hozzáadás"
}

/**
 * 
 * @param {FieldData} fieldData 
 * @param {HTMLFormElement} form
 * @returns {void}
 */
function createInputField(fieldData, form){
    const div = form.appendChild(document.createElement("div"))

    const label = div.appendChild(document.createElement("label"))
    label.innerText = fieldData.text
    label.htmlFor = fieldData.id
    div.appendChild(document.createElement("br"))

    if (fieldData.type != "select"){
        const input = div.appendChild(document.createElement("input"))
        input.id = fieldData.id
        input.name = fieldData.name
        input.type = fieldData.type
    } else {
        const select = div.appendChild(document.createElement("select"))
        select.id = fieldData.id
        select.name = fieldData.id

        for (const i of fieldData.options){
            const option = select.appendChild(document.createElement("option"))
            option.value = i.value
            option.innerText = i.text
        }
    }
    div.appendChild(document.createElement("br"))

    const span = div.appendChild(document.createElement("span"))
    span.classList.add("error")
}

/**
 * 
 * @param {HTMLInputElement[]} fields 
 * @param {string} errorMessage
 * @returns {boolean}
 */
function validateFields(fields, errorMessage){
    let bool = true

    for (const i of fields)
        if (!validateField(i)){
            bool = false
            i.parentElement.querySelector(".error").innerText = errorMessage
        }

    return bool
}

/**
 * 
 * @param {HTMLInputElement} field
 * @returns {boolean}
 */
function validateField(field){
    return field.value != "";
}

/**
 * @param {Event} e 
 * @returns {void}
 */
function jsFormEventListener(e){
    e.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    const form = e.target

    for (const i of form.querySelectorAll(".error"))
        i.innerText = ""

    /**
     * @type {HTMLInputElement}
     */
    const osztaly = form.querySelector("#osztaly")
    /**
     * @type {HTMLInputElement}
     */
    const mano1 = form.querySelector("#mano1")
    /**
     * @type {HTMLInputElement}
     */
    const muszak1 = form.querySelector("#muszak1")
    /**
     * @type {HTMLInputElement}
     */
    const masodikmano = form.querySelector("#masodikmano")
    /**
     * @type {HTMLInputElement}
     */
    const mano2 = form.querySelector("#mano2")
    /**
     * @type {HTMLInputElement}
     */
    const muszak2 = form.querySelector("#muszak2")

    if (!validateFields([osztaly, mano1, muszak1], "Kitöltendő mező!"))
        return

    /**
     * @type {OsztalyFelvetel}
     */
    const obj = {
        osztaly: osztaly.value,
        mano: [mano1.value],
        muszak: [mapMuszak(muszak1.value)]
    }

    if (masodikmano.checked){
        obj.mano.push(mano2.value)
        obj.muszak.push(mapMuszak(muszak2.value))
    }

    createNewElement(obj, form, tbodyData)
}

/**
 * @param {Event} e
 * @returns {void}
 */
function htmlFormEventListener(e){
    e.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    const form = e.target

    for (const i of form.querySelectorAll(".error"))
        i.innerText = ""

    /**
     * @type {HTMLInputElement}
     */
    const manochooser = form.querySelector("#manochooser")
    /**
     * @type {HTMLInputElement}
     */
    const manotev1 = form.querySelector("#manotev1")
    /**
     * @type {HTMLInputElement}
     */
    const manotev2 = form.querySelector("#manotev2")

    if (!validateFields([manochooser, manotev1], "Kitöltendő mező!"))
        return

    /**
     * @type {ManoFeladat}
     */
    const obj = {
        mano: manochooser.value,
        tevekenyseg: [manotev1.value]
    }

    if (validateField(manotev2))
        obj.tevekenyseg.push(manotev2.value)

    renderColspanRow(obj, document.getElementById("htmltbody"))

    form.reset()
}


/**
 * @type {OsztalyFelvetel[]}
 */
const tbodyData = [
    {
        osztaly: "Logisztika",
        mano: ["Kovács Máté", "Kovács József"],
        muszak: ["Délelöttös", "Délutános"]
    },
    {
        osztaly: "Könyvelés",
        mano: ["Szabó Anna"],
        muszak: ["Éjszakai"]
    },
    {
        osztaly: "Játékfejlesztés",
        mano: ["Varga Péter", "Nagy Eszter"],
        muszak: ["Délutános", "Éjszakai"]
    },
]

const header = ["Osztály", "Manó", "Műszak"]

/**
 * @type {FieldData[]}
 */
const formData = [
    {
        id: "osztaly",
        text: "Osztály",
        type: "text"
    },
    {
        id: "mano1",
        text: "Manó 1",
        type: "text"
    },
    {
        id: "muszak1",
        text: "Műszak 1",
        type: "select",
        options: [
            { value: "1", text: "Délelőttös"},
            { value: "2", text: "Délutános"},
            { value: "3", text: "Éjszakai"}
        ]
    },
    {
        id: "masodikmano",
        text: "Két manót veszek fel",
        type: "checkbox"
    },
    {
        id: "mano2",
        text: "Manó 2",
        type: "text"
    },
    {
        id: "muszak2",
        text: "Műszak 2",
        type: "select",
        options: [
            { value: "1", text: "Délelőttös"},
            { value: "2", text: "Délutános"},
            { value: "3", text: "Éjszakai"}
        ]
    }
]

initSelect(tbodyData)
document.getElementById("htmlform").addEventListener("submit", htmlFormEventListener)

generateJsTable(header, "jstbody", "jssection")
renderTbody("jstbody", tbodyData)
CreateForm("jssection", formData, "jsform")
initCheckbox(document.getElementById("masodikmano"))
document.getElementById("jsform").addEventListener("submit", jsFormEventListener)