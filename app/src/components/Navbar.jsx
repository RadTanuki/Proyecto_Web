import { useEffect, useState } from "react";
import { Dumbbell, Moon, Sun, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";


export function Navbar() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    function toggleTheme() {
        setDarkMode((prev) => !prev);
    }

    return (
        <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between py-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Dumbbell className="h-8 w-8" />
                    </div>

                    <h1 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                        Inserte aquí el nombre de la página xd
                    </h1>
                </div>

                <div className="flex items-center gap-3 rounded-full border bg-card/70 px-10 py-1.5 shadow-sm">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-3.5">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="h-7 rounded-full border">
                                    Inicio
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <ul className="grid w-l gap-2 p-4">
                                        <li>
                                            <NavigationMenuLink className="text-center">
                                                <Link to="/">
                                                    ¿Quiénes somos?
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>

                                        <li>
                                            <NavigationMenuLink className="text-center">
                                                <Link to="services">
                                                    Servicios
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>

                                        <li>
                                            <NavigationMenuLink className="text-center">
                                                ¿Cómo funciona?
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="h-7 rounded-full border">
                                    Cita
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <ul className="grid w-l gap-2 p-4">
                                        <li>
                                            <NavigationMenuLink className="text-center">
                                                Obtener cita
                                            </NavigationMenuLink>
                                        </li>

                                        <li>
                                            <NavigationMenuLink className="text-center">
                                                Registro de citas
                                            </NavigationMenuLink>
                                        </li>

                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="h-7.5 rounded-full border">
                                    <UserRound className="px-0.5" />Usuario
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                    <ul className="grid w-l gap-2 p-4">
                                        <li>
                                            <NavigationMenuLink className="text-center">
                                                Iniciar Sesión
                                            </NavigationMenuLink>
                                        </li>

                                        <li>
                                            <NavigationMenuLink className="text-center">
                                                Registrarse
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>


                        </NavigationMenuList>
                    </NavigationMenu>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleTheme}
                        aria-label="Cambiar tema"
                        className="w-15 rounded-full border-border bg-background hover:bg-accent hover:text-accent-foreground"
                    >
                        {darkMode ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </Button>
                </div>
            </nav>
        </header>
    );
}
