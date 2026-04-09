// Lista de productos
let productos = [
    { id: 1, nombre: "Camiseta", precio: 50000 },
    { id: 2, nombre: "Pantalon", precio: 80000 },
    { id: 3, nombre: "Gorra", precio: 30000 }
];

// Carrito de compras
let carrito = [];

// Mostrar productos
function verProductos() {
    console.log("📦 Lista de productos:");
    productos.forEach(p => {
        console.log(p.id + ". " + p.nombre + " - $" + p.precio);
    });
}

// Agregar producto al carrito
function agregarAlCarrito(idProducto) {
    let producto = productos.find(p => p.id === idProducto);

    if (producto) {
        carrito.push(producto);
        console.log("✅ Producto agregado:", producto.nombre);
    } else {
        console.log("❌ Producto no encontrado");
    }
}

// Ver carrito
function verCarrito() {
    console.log("🛒 Carrito de compras:");

    if (carrito.length === 0) {
        console.log("El carrito está vacío");
        return;
    }

    carrito.forEach(p => {
        console.log(p.nombre + " - $" + p.precio);
    });
}

// Calcular total
function calcularTotal() {
    let total = carrito.reduce((acc, p) => acc + p.precio, 0);
    console.log("💰 Total a pagar: $" + total);
}

// Vaciar carrito
function vaciarCarrito() {
    carrito = [];
    console.log("🗑️ Carrito vaciado");
}

// Simulación
verProductos();
agregarAlCarrito(1);
agregarAlCarrito(2);
verCarrito();
calcularTotal();