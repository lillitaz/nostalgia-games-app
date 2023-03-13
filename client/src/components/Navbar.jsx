const Navbar = () => {
    return (
        
        <nav class="flex items-center bg-gray-900 p-4 flex-wrap">
            <a href="/" class="p-2 mr-4 inline-flex items-center">
                <span class="text-xl text-white font-bold tracking-wide">
                    <> 🎮 Nostalgia Games App</>
                </span>
            </a>
            <button
                class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
                data-target="#navigation">
                <i class="material-icons">menu</i>
            </button>
            <div
                class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
                id="navigation">
                <div
                    class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                    <a
                        href="/"
                        class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
                        <span>Home</span>
                    </a>
                    <a
                        href="/about"
                        class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
                        <span>
                            About
                        </span>
                    </a>
                    <a
                        href="/account"
                        class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
                        <span>
                            Your Account
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;