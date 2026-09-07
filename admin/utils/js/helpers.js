// ==============================================================================
// ==============================================================================
// LLenar combo desde un json
function llenarCombo( jsonData , selectId , includeDefault = true ) {

    varDump( selectId );
    const select        = document.querySelector(selectId);
    varDump( select );
    if (!select) return;

    // Limpiar opciones
    select.innerHTML = "";

    // Opción por defecto
    if (includeDefault) {
        const opt = document.createElement("option");
        opt.value = "";
        opt.textContent = "Seleccione...";
        select.appendChild(opt);
    }

    // Agregar opciones
    jsonData.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.text;
        select.appendChild(option);
    });
}
// llenarCombo( arMeses , `#${xIdForm} #nMes` );
// ==============================================================================
// ==============================================================================
// Genera los options de un combo desde un json
function optionsCombo( jsonData , selectSelector , includeDefault = true ) {
    const select = document.querySelector(selectSelector);
    if (!select) return "";

    let html = "";

    if (includeDefault) {
        html += `<option value="0" >Seleccione...</option>`;
    }

    html += jsonData
        .map(item => `<option value="${item.id}">${item.text}</option>`)
        .join("");

    return html;
}
// let opts = optionsCombo( arMeses , `#${xIdForm} #nMes` );
// ==============================================================================
// ==============================================================================