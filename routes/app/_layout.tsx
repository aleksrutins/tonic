import { PageProps } from "$fresh/server.ts";

export default function AppLayout({ Component }: PageProps) {
    return (
        <div class="flex flex-row">
            <nav>

            </nav>
            <main class="flex-1">
                <Component/>
            </main>
        </div>
    )
}