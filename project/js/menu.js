const menuItems = [
    {
        name: "Pav Bhaji",
        price: 20.00,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=1200"
    },
    {
        name: "Chole Bhature",
        price: 40.00,
        image:"chole bhature.jpg"
    },
    {
        name: "Pizza",
        price: 150.00,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200"
    },
    {
        name: "Mango Lassi",
        price: 40.00,
        image: "lassi.jpg"
    },
    {
        name: "Masala Dosa",
        price: 50.00,
        image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=1200"
    },
    {
        name: "Veg Biryani",
        price: 60.00,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=1200"
    },
    {
        name: "Vada Pav",
        price: 20.00,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=1200"
    },
    {
        name: "Rava Dosa",
        price: 50.00,
        image: "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=1200"
    },
    {
        name: "Samosa",
        price: 10.00,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=1200"
    }
];

function createMenuItem(item) {
    return `
        <div class="menu-item">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-info">
                <h3>${item.name}</h3>
                <p class="price">₹${item.price.toFixed(2)}</p>
            </div>
        </div>
    `;
}

function initializeMenu() {
    const menuGrid = document.getElementById('menuGrid');
    if (menuGrid) {
        menuGrid.innerHTML = menuItems.map(createMenuItem).join('');
    }
}

document.addEventListener('DOMContentLoaded', initializeMenu);