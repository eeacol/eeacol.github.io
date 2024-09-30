// Crear la cámara virtual
const camera = document.createElement("a-entity");
camera.setAttribute('material-baseColor', "blue");

// Agregar elementos al modelo de realidad aumentada
const elements = [
    { id: 'pared-virtual', position: [0, 1, 0] },
    { id: 'casa', position: [-3, -2, 2], scale: [1, 1, 1] }
];

elements.forEach(element => {
    const entity = document.createElement("a-entity");
    entity.setAttribute('id', element.id);
    entity.setAttribute('position', element.position);
    entity.setAttribute('scale', [0.5, 0.5]);
});

// Agregar eventos de selección a la pared virtual
document.addEventListener('object-selected', function (e) {
    if (e.detail.object.id === 'pared-virtual') {
        document.getElementById("wall-select").style.display = 'block';
    }
});

// Agregar eventos para cambiar color de la pared virtual
const wallSelect = document.getElementById('wall-select');
wallSelect.addEventListener('click', event => {
    const selectedWall = event.target.id;
    elements.forEach(element => {
        if (element.id === element.id) {
            camera.setAttribute('position', [selectedWall, 0, 0]);
        }
    });
});

// Agregar eventos para cambiar color de la pared virtual en tiempo real
document.getElementById('colorPicker').addEventListener('input', event => {
    elements.forEach(element => {
        if (element.id === 'pared-virtual') {
            camera.setAttribute('material-color', element.id + '#' + event.target.value);
        }
    });
});

// Agregar eventos para activar la realidad aumentada
function activateAR() {
    document.getElementById('ar-view').style.display = 'block';
}

document.getElementById('hero button').addEventListener('click', () => {
    activateAR();
});
