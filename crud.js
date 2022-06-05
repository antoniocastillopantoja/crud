const propiedades = [
    {
        "Id": '001',
        "Nombre": 'FRACC. BARRANCOS',
    },
    {
        "Id": '002',
        "Nombre": 'FRACC. VALLE ALTO',
    },
    {
        "Id": '003',
        "Nombre": 'FRACC. LOMAS DEL SOL',
           },
    {
        "Id": '004',
        "Nombre": 'COL. LAS QUINTAS',
            },
    {
        "Id": '005',
        "Nombre": 'COL. CHAPULTEPEC',
       
    },
   
];

// Uso del DOM para insertar el Arrya de Jasson de Propiedades
for (i = 0; i < propiedades.length; i++) {
    propiedad = propiedades[i]
    let listaPropiedades = document.createElement('Option');
    listaPropiedades.innerHTML = propiedad.Nombre;
    document.getElementsByTagName('select')[0].appendChild(listaPropiedades);
}

// Botón agregar
let agregar = () => {
    const selectedOption = document.getElementById('inputGroupSelect01').value;
    const defaultOption = document.getElementById('defaultOption').value;
    const addedList = document.getElementsByTagName('tr');
    let output = false
    for (i = 0; i < addedList.length; i++) {
        let textoInterior = addedList[i].innerText;
        output = textoInterior.includes(selectedOption);
        if (output == true) {
            alert('Esta Propiedad ya ha sido añadido. Favor de seleccionar uno diferente.');
            break;
        }
    }
    if (selectedOption != defaultOption && output == false) {
        let tbody = document.getElementsByTagName('tbody');
        let largoLista = document.getElementsByTagName('tr');
        const selectedPropiedad = propiedades.find(value => value.Nombre == selectedOption);
        const namePropiedad = selectedPropiedad.Nombre;
        const buttons = `<button type="button" class="btn btn-primary" id='${namePropiedad}' onclick="editarUno(this.id)">Editar</button><button type="button" class="btn btn-danger" id='${namePropiedad}' onclick="eliminar(this.id)">Eliminar</button>`;
        let addedPropiedad = document.createElement('tr');
        addedPropiedad.innerHTML = `<td>${selectedPropiedad.Id}</td><td>${selectedOption}</td><td>${buttons}</td>`;
        tbody[0].appendChild(addedPropiedad);
        document.getElementById('inputGroupSelect01').value = defaultOption
    }
   
}

// Botones editar
let editarUno = (propiedad) => {
    cuadrosEdicion = document.getElementsByClassName('btn btn-primary editar').length;
    if (cuadrosEdicion > 0) {
        alert('Ya hay un cuadro de edición abierto. Favor de terminar el proceso de edición actual.');
    } else {
        document.getElementById('inputGroupSelect01').value = propiedad;        
        let botonEditar = document.createElement('button');
        botonEditar.className = 'btn btn-primary editar';
        botonEditar.id = propiedad;
        botonEditar.setAttribute("onclick","editarDos(this.id);");
        botonEditar.innerText = 'Actualizar';
        botones.appendChild(botonEditar);
    }
}
let editarDos = (propiedad) => {
    const selectedOption = document.getElementById('inputGroupSelect01').value;
    const defaultOption = document.getElementById('defaultOption').value;
    const selectedPropiedad = propiedades.find(value => value.Nombre == selectedOption);
    const buttons = `<button type="button" class="btn btn-primary" id='${selectedOption}' onclick="editarUno(this.id)">Editar</button><button type="button" class="btn btn-danger" id='${selectedOption}' onclick="eliminar(this.id)">Eliminar</button>`;
    document.getElementsByClassName('btn btn-primary editar')[0].remove();    
    lista = document.getElementsByTagName('tr');
    for (i = 0; i < lista.length; i++) {
        let textoInterior = lista[i].innerText;
        output = textoInterior.includes(selectedOption);
        if (output == true) {
            alert('Esta Propiedad ya existe. Favor de seleccionar otra.');
            break;
        }
    }
    if (output != true) {
        for (i = 0; i < lista.length; i++) {
            texto = String(lista[i].innerText);
            output = texto.includes(propiedad);
            if (output == true) {           
                document.getElementsByTagName('tr')[i].innerHTML = `<td>${selectedPropiedad.Id}</td><td>${selectedOption}</td><td>${buttons}</td>`;
                document.getElementById('inputGroupSelect01').value = defaultOption
                break;
            }
        }
    }
    
}

// Botón eliminar
let eliminar = (index) => {
    lista = document.getElementsByTagName('tr');
    for (i = 0; i < lista.length; i++) {
        texto = String(lista[i].innerText);
        output = texto.includes(index);
        if (output == true) {
            console.log(i);
            document.getElementsByTagName('tr')[i].remove()
            break;
        }
    }
}