import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react'; // Iconos

// --- Paleta de Colores Consolidada (Duplicada para mantener la modularidad) ---
const customColors = {
    fondoClaro: '#e8c39e',        // Beige Claro
    fondoMedio: '#c4a17d',      // Bronceado Medio
    acentoTerracota: '#a25d49', // Terracota (Títulos, CTA)
    fondoOscuro: '#84623e',      // Marrón Oscuro (Header/Footer)
    textoPrincipal: '#3e3a35',   // Texto Oscuro
    textoSecundario: '#8f9491',  // Gris Frío
};

const Contacto = () => {
    return (
        <div className="antialiased font-sans" style={{ backgroundColor: customColors.fondoClaro }}>
            
            {/* BARRA DE NAVEGACIÓN (HEADER) - Consistente */}
            <header className="fixed w-full z-30 shadow-2xl" style={{ backgroundColor: customColors.fondoOscuro, opacity: 0.98 }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link 
                            to="/" 
                            className="text-3xl font-extrabold tracking-widest transition duration-150"
                            style={{ color: customColors.fondoClaro }}
                        >
                            STUDIO MATE
                        </Link>
                        
                        <nav className="hidden md:flex space-x-10">
                            {[
                                { text: 'Inicio', to: '/' },
                                { text: 'Portafolio', to: '/portafolio' }, 
                                { text: 'Nosotras', to: '/about-us' },
                                { text: 'Contacto', to: '/contact-us' }
                            ].map((item, index) => (
                                <Link key={index} 
                                    to={item.to} 
                                    className="text-base font-semibold uppercase tracking-wider transition duration-150 hover:text-white"
                                    style={{ color: customColors.fondoClaro, opacity: 0.9 }}
                                >
                                    {item.text}
                                </Link>
                            ))}
                        </nav>
                        
                        <Link 
                            to="/agendar"
                            className="hidden md:inline-block py-3 px-8 text-base font-bold rounded-lg transition duration-150 hover:bg-opacity-90 shadow-xl"
                            style={{ 
                                backgroundColor: customColors.acentoTerracota, 
                                color: customColors.fondoClaro 
                            }}
                        >
                            Agendar Cita
                        </Link>

                    </div>
                </div>
            </header>

            <main className="pt-20"> {/* Ajuste para el header fijo */}
                <section className="py-20 md:py-32" style={{ backgroundColor: customColors.fondoClaro }}>
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h1 
                            className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight"
                            style={{ color: customColors.textoPrincipal }}
                        >
                            Hablemos de tu Próximo Proyecto
                        </h1>
                        <p className="text-xl md:text-2xl mb-16 max-w-2xl mx-auto" style={{ color: customColors.textoPrincipal, opacity: 0.9 }}>
                            ¿Tienes una idea en mente? ¿Necesitas asesoramiento de diseño? Estamos listos para escuchar.
                        </p>

                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Formulario de Contacto */}
                            <div className="p-10 rounded-2xl shadow-xl border-b-4 border-r-4" style={{ backgroundColor: 'white', borderColor: customColors.fondoMedio }}>
                                <h3 className="text-3xl font-bold mb-8 text-left" style={{ color: customColors.acentoTerracota }}>
                                    Envíanos un Mensaje
                                </h3>
                                <form className="space-y-6 text-left">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: customColors.textoPrincipal }}>
                                            Nombre Completo
                                        </label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-offset-2" 
                                            style={{ borderColor: customColors.textoSecundario, backgroundColor: customColors.fondoClaro, color: customColors.textoPrincipal, focusRingColor: customColors.acentoTerracota }} 
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: customColors.textoPrincipal }}>
                                            Correo Electrónico
                                        </label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-offset-2" 
                                            style={{ borderColor: customColors.textoSecundario, backgroundColor: customColors.fondoClaro, color: customColors.textoPrincipal, focusRingColor: customColors.acentoTerracota }} 
                                            placeholder="tu.email@ejemplo.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: customColors.textoPrincipal }}>
                                            Tu Mensaje
                                        </label>
                                        <textarea 
                                            id="message" 
                                            rows="5" 
                                            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-offset-2" 
                                            style={{ borderColor: customColors.textoSecundario, backgroundColor: customColors.fondoClaro, color: customColors.textoPrincipal, focusRingColor: customColors.acentoTerracota }} 
                                            placeholder="Describe tu proyecto o consulta..."
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="w-full py-3 px-6 rounded-lg font-bold text-lg shadow-md transition duration-300 hover:opacity-90"
                                        style={{ backgroundColor: customColors.acentoTerracota, color: customColors.fondoClaro }}
                                    >
                                        Enviar Mensaje
                                    </button>
                                </form>
                            </div>

                            {/* Información de Contacto Directo y Redes Sociales */}
                            <div className="p-10 rounded-2xl shadow-xl flex flex-col justify-between" style={{ backgroundColor: customColors.fondoOscuro }}>
                                <div>
                                    <h3 className="text-3xl font-bold mb-8 text-left" style={{ color: customColors.fondoClaro }}>
                                        Información de Contacto
                                    </h3>
                                    <ul className="space-y-6 text-left text-lg" style={{ color: customColors.fondoClaro, opacity: 0.9 }}>
                                        <li className="flex items-center">
                                            <Mail size={24} style={{ color: customColors.acentoTerracota }} className="mr-4" />
                                            info@studiomate.com
                                        </li>
                                        <li className="flex items-center">
                                            <Phone size={24} style={{ color: customColors.acentoTerracota }} className="mr-4" />
                                            +51 987 654 321
                                        </li>
                                        <li className="flex items-start">
                                            <MapPin size={24} style={{ color: customColors.acentoTerracota }} className="mr-4 mt-1" />
                                            Av. Siempreviva 742, Lima, Perú
                                        </li>
                                    </ul>
                                </div>
                                
                                {/* Redes Sociales */}
                                <div className="mt-12 text-left">
                                    <h4 className="text-xl font-bold mb-4" style={{ color: customColors.fondoClaro }}>Síguenos</h4>
                                    <div className="flex space-x-6">
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition duration-150 hover:scale-110">
                                            <Instagram size={32} style={{ color: customColors.acentoTerracota }} />
                                        </a>
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition duration-150 hover:scale-110">
                                            <Facebook size={32} style={{ color: customColors.acentoTerracota }} />
                                        </a>
                                        {/* Puedes añadir más iconos de redes sociales aquí */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mapa (Placeholder) */}
                        <div className="mt-20 p-4 rounded-2xl shadow-xl overflow-hidden" style={{ backgroundColor: 'white' }}>
                            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: customColors.textoPrincipal }}>
                                Nuestra Ubicación
                            </h3>
                            <div className="w-full h-96 rounded-lg overflow-hidden border-2" style={{ borderColor: customColors.fondoMedio }}>
                                {/* Aquí iría un mapa real de Google Maps, Waze, etc. */}
                                <div 
                                    className="w-full h-full flex items-center justify-center text-xl font-semibold" 
                                    style={{ backgroundColor: customColors.fondoClaro, color: customColors.textoSecundario }}
                                >
                                    [Placeholder de Mapa]
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            {/* Pie de Página - Consistente */}
            <footer className="py-6 text-center text-sm" style={{ backgroundColor: customColors.fondoOscuro, color: customColors.fondoClaro, opacity: 0.5 }}>
                © {new Date().getFullYear()} Estudio Mate. Todos los derechos reservados. | Diseñado con pasión en Latinoamérica.
            </footer>
        </div>
    );
};

export default Contacto;