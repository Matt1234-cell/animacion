// Control de la animación y eventos
document.addEventListener('DOMContentLoaded', function() {
    const continueBtn = document.getElementById('continueBtn');
    const svg = document.querySelector('.hello-kitty-svg');
    const romanticMessage = document.getElementById('romanticMessage');
    const typingText = document.getElementById('typingText');
    
    // Mostrar el botón exactamente a los 10 segundos desde que carga la página
    setTimeout(() => {
        continueBtn.classList.remove('hidden');
        continueBtn.style.opacity = '1';
        continueBtn.style.transform = 'translateY(0)';
        continueBtn.style.transition = 'all 0.8s ease-out';
        console.log('Botón aparecido a los 10 segundos'); // Debug temporal
    }, 10000); // 10 segundos exactos
    
    // Event listener para el botón de continuar
    continueBtn.addEventListener('click', function() {
        // Añadir efecto de clic al botón
        continueBtn.style.transform = 'scale(0.95)';
        continueBtn.style.transition = 'transform 0.1s ease';
        
        setTimeout(() => {
            continueBtn.style.transform = 'scale(1)';
            showRomanticMessage();
        }, 100);
    });
    
    // Función para mostrar el mensaje romántico
    function showRomanticMessage() {
        // Mostrar el modal con animación suave
        romanticMessage.classList.add('show');
        
        // Obtener el texto completo
        const fullText = typingText.textContent;
        typingText.textContent = ''; // Limpiar el texto
        
        // Crear cursor parpadeante
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        typingText.appendChild(cursor);
        
        // Efecto typing letra por letra
        let charIndex = 0;
        const typingSpeed = 80; // milisegundos por letra
        
        function typeWriter() {
            if (charIndex < fullText.length) {
                // Insertar letra antes del cursor
                const textNode = document.createTextNode(fullText.charAt(charIndex));
                typingText.insertBefore(textNode, cursor);
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Cuando termina, esperar y mostrar corazones
                setTimeout(() => {
                    addDriftToHearts();
                }, 2000);
            }
        }
        
        // Iniciar typing después de una pequeña pausa
        setTimeout(() => {
            typeWriter();
        }, 300);
    }
    
    // Función para agregar deriva sutil a los corazones
    function addDriftToHearts() {
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach((heart, index) => {
            const drift = (Math.random() - 0.5) * 40; // -20px a 20px de deriva
            heart.style.setProperty('--drift', `${drift}px`);
        });
    }
    
    // Efectos adicionales en el SVG
    svg.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    svg.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Detectar cuando se completa la animación
    setTimeout(() => {
        document.body.classList.add('animation-complete');
        // Agregar clase para efectos adicionales si es necesario
    }, 10000);
});

// Función para cerrar el mensaje romántico
function closeMessage() {
    const romanticMessage = document.getElementById('romanticMessage');
    romanticMessage.classList.remove('show');
}