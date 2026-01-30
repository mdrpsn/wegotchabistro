async function loadMenu() {
    try {
        const response = await fetch('menu.json');
        const menuData = await response.json();
        const menuContainer = document.getElementById('menu-container');

        menuData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            card.innerHTML = \
                <h3>\ <span class='price'>\</span></h3>
                <p>\</p>
            \;
            menuContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading menu:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadMenu);
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.innerText = 'Sending...';
    
    // Simulate a form submission
    setTimeout(() => {
        status.innerText = 'Salamat! Your message has been sent.';
        this.reset();
    }, 1500);
});
function checkStatus() {
    const now = new Date();
    const hours = now.getHours();
    const statusElement = document.getElementById('bistro-status');
    
    // Set hours: 10 AM (10) to 10 PM (22)
    if (hours >= 10 && hours < 22) {
        statusElement.innerHTML = '🟢 <span style="color: #2D5A27;">Open Now - Visit us in Davao!</span>';
    } else {
        statusElement.innerHTML = '🔴 <span style="color: #D94126;">Closed - Opening at 10:00 AM</span>';
    }
}
checkStatus();
function toggleSpecials() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sun, 5 = Fri, 6 = Sat
    const hour = now.getHours();
    const banner = document.getElementById('weekend-specials');

    // Show if Friday after 5 PM (17:00), Saturday, or Sunday
    const isWeekend = (day === 5 && hour >= 17) || day === 6 || day === 0;

    if (isWeekend) {
        banner.innerHTML = "✨ WEEKEND SPECIAL: Durian Ribs & Unlimited Iced Tea! ✨";
        banner.style.display = "block";
    }
}
toggleSpecials();
const modal = document.getElementById('booking-modal');
const btn = document.getElementById('open-booking');
const span = document.querySelector('.close-modal');

btn.onclick = () => modal.style.display = 'block';
span.onclick = () => modal.style.display = 'none';
window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; }

function sendWhatsApp() {
    const name = document.getElementById('book-name').value;
    const guests = document.getElementById('book-guests').value;
    const time = document.getElementById('book-time').value;
    
    if(!name || !guests || !time) { alert('Please fill in all fields'); return; }

    const phone = '639000000000'; // Replace with actual bistro number
    const message = \Maayong adlaw! I would like to book a table for \. \ persons on \. Confirming if available?\;
    const url = \https://wa.me/\?text=\\;
    
    window.open(url, '_blank').focus();
}
