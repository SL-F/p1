// Funciones para manejar los clics en los botones de la sección 1
//document.getElementById('btn1').addEventListener('click', function() {
    //alert('Botón 1 presionado');
//});


// Obtener elementos
const buttons = document.querySelectorAll('.custom-button, .rectangulo-vertical');
const modals = document.querySelectorAll('.modal-overlay');
const closeButtons = document.querySelectorAll('.close-dialog');

// Función para abrir el cuadro de diálogo correspondiente
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const dialogId = button.getAttribute('data-dialog');
        const modal = document.getElementById(dialogId);
        modal.style.display = 'flex'; // Muestra el cuadro de diálogo
    });
});

// Función para cerrar los cuadros de diálogo
closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        const modal = closeButton.closest('.modal-overlay');
        modal.style.display = 'none'; // Oculta el cuadro de diálogo
    });
});

// Cerrar el cuadro de diálogo al hacer clic fuera del contenido
modals.forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) { // Verifica si se hizo clic en el overlay
            modal.style.display = 'none'; // Oculta el cuadro de diálogo
        }
    });
});


