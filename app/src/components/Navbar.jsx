import { useEffect, useState } from "react";
import { Dumbbell, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

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

                <div className="flex items-center gap-2 rounded-full border border-border bg-card/70 p-1 shadow-sm">
                    <Button
                        variant="ghost"
                        className="rounded-full px-4 text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                    >
                        Inicio
                    </Button>

                    <Button
                        variant="ghost"
                        className="rounded-full px-4 text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                    >
                        Registrarse
                    </Button>

                    <Button
                        variant="ghost"
                        className="rounded-full px-4 text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                    >
                        Servicios
                    </Button>

                    <Button
                        variant="ghost"
                        className="rounded-full px-4 text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                    >
                        Contratar servicio
                    </Button>

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
