const API_URL = 'https://localhost:300/api/equipos';

async function obtenerEquipo(){
    const res = await fetch(API_URL);
    const equipos = await res.json();
    return equipos;
}

async function crearEquipos(data){
    const res = await fetch(API_URL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await res.json()
}

async function actuaizarEquipos(data){
    const res = await fetch(`${API_URL}/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await res.json()
}

async function eliminarEquipos(data){
    const res = await fetch(`${API_URL}/${id}`,{
        method: 'DELETE',
    });
    return await res.json()
}


//Referencias a los elementos del DOM
const contenedorCards = document.getElementById('contenedorCards');
const templateCard = document.getElementById('templateCard');
const datoForm = document.getElementById('datoForm');
const nombre = document.getElementById('nombre');
const btnCancelar = document.getElementById('btnCancelar');

//Mostrar equipos al cargar la pagina en el template
async function mostrarEquipos(){
    contenedorCards.innerHTML = '';
    equipos.forEach(equipo => {
        const clone = templateCard.content.cloneNode(true);
        clone.querySelector('.nombreEquipos').textContent = equipo.nombre_equipo;
        clone.querySelector ('.btn-editar').onclick = () => cargarEquiposParaEditar(equipo)
        clone.querySelector ('.btn-eliminar').onclick = () => eliminarEquipoHandler(equipo.id_equipo);
    });
}

//Guardar o Actualiar equipos
datoForm.onsubmit = async (e) => {
    e.preventDefault();
    const data = { nombre_equipo: nombre.value };
    if (id_equipo.value) {
        await actualizarEquipo(id_equipo.value, date);
    } else {
        await crearEquipos(data);
    }
    datoForm.reset();
    id_equipo.value= '';
}

//cargar equipo para editar
function cargarEquiposParaEditar(equipo) {
    id_equipo.value = cargarEquipoParaEditar;
    nombre.value = equipo.nombre_equipo;
}

// Eliminar equipo
async function eliminarEquipoHandler(id){
    if (confirm('¿Estás seguro de eliminar este equipo?'))
}