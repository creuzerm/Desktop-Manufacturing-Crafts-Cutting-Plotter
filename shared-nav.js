// Shared navigation registry and injector for Craft Cutter Tools
(function() {
    // Registry of all available tools/generators
    const generators = [
        {
            id: "home",
            name: "Dashboard",
            path: "index.html"
        },
        {
            id: "shingle-maker",
            name: "Shingle Maker",
            path: "ShingleMaker.html"
        },
        {
            id: "stone-generator",
            name: "Stone Generator",
            path: "StoneBlockGenerator.html"
        },
        {
            id: "kirigami-packing",
            name: "Kirigami Paper",
            path: "KirigamiPackingPaper.html"
        }
    ];

    // Determine the current page filename
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Wait for the DOM to be ready
    document.addEventListener("DOMContentLoaded", () => {
        injectNavbar();
    });

    function injectNavbar() {
        // Create container if not exists
        let navContainer = document.getElementById("navigation-header");
        if (!navContainer) {
            navContainer = document.createElement("div");
            navContainer.id = "navigation-header";
            // Prepend to body
            document.body.insertBefore(navContainer, document.body.firstChild);
        }

        // Build HTML for the Navbar
        const navHtml = `
            <nav class="bg-slate-900 border-b border-slate-800 text-slate-100 font-sans shadow-lg sticky top-0 z-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <!-- Brand/Logo -->
                        <div class="flex items-center">
                            <a href="index.html" class="flex items-center space-x-2 text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
                                <span class="bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">📐 Craft Cutter Tools</span>
                            </a>
                        </div>

                        <!-- Desktop Navigation Links -->
                        <div class="hidden md:flex items-center space-x-4">
                            ${generators.map(gen => {
                                const isActive = currentPath.toLowerCase() === gen.path.toLowerCase();
                                const activeClass = isActive 
                                    ? "bg-slate-800 text-white font-semibold border-b-2 border-blue-500" 
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200";
                                return `
                                    <a href="${gen.path}" class="px-3 py-2 rounded-md text-sm ${activeClass}">
                                        ${gen.name}
                                    </a>
                                `;
                            }).join('')}
                        </div>

                        <!-- Mobile menu button -->
                        <div class="md:hidden flex items-center">
                            <button type="button" id="mobile-menu-toggle" class="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Mobile Menu, show/hide based on menu state -->
                <div class="hidden md:hidden border-t border-slate-850" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        ${generators.map(gen => {
                            const isActive = currentPath.toLowerCase() === gen.path.toLowerCase();
                            const activeClass = isActive 
                                ? "bg-slate-800 text-white font-semibold" 
                                : "text-slate-300 hover:bg-slate-800 hover:text-white";
                            return `
                                <a href="${gen.path}" class="block px-3 py-2 rounded-md text-base font-medium ${activeClass}">
                                    ${gen.name}
                                </a>
                            `;
                        }).join('')}
                    </div>
                </div>
            </nav>
        `;

        navContainer.innerHTML = navHtml;

        // Setup mobile menu toggle logic
        const toggleBtn = document.getElementById("mobile-menu-toggle");
        const mobileMenu = document.getElementById("mobile-menu");
        if (toggleBtn && mobileMenu) {
            toggleBtn.addEventListener("click", () => {
                const isExpanded = mobileMenu.classList.contains("hidden");
                if (isExpanded) {
                    mobileMenu.classList.remove("hidden");
                    toggleBtn.innerHTML = `
                        <span class="sr-only">Close main menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    `;
                } else {
                    mobileMenu.classList.add("hidden");
                    toggleBtn.innerHTML = `
                        <span class="sr-only">Open main menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    `;
                }
            });
        }
    }
})();
