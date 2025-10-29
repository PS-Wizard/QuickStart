<script lang="ts">
    import { afterNavigate, beforeNavigate, onNavigate } from "$app/navigation";
    import favicon from "$lib/assets/favicon.svg";
    import Navbar from "$lib/components/Navbar.svelte";
    import "../css/output.css";
    beforeNavigate(() => {
        document.documentElement.style.cursor = "progress";
        document.body.style.cursor = "progress";
    });
    onNavigate((navigation) => {
        if (!document.startViewTransition) return;
        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
    afterNavigate(() => {
        document.documentElement.style.cursor = "";
        document.body.style.cursor = "";
    });

    let { children, data } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>
<nav style="view-transition-name: navbar;">
    <Navbar user={data.user} />
</nav>
<main class="w-full min-h-screen">
    {@render children?.()}
</main>

<style>
    @view-transition {
        navigation: auto;
    }

    ::view-transition-old(root) {
        animation: 0.6s cubic-bezier(0.4, 0, 0.2, 1) both blur-out;
    }

    ::view-transition-new(root) {
        animation: 0.6s cubic-bezier(0.4, 0, 0.2, 1) both blur-in;
    }

    @keyframes blur-out {
        to {
            filter: blur(20px);
            opacity: 0;
        }
    }
    @keyframes blur-in {
        from {
            filter: blur(20px);
            opacity: 0;
        }
    }
</style>
