<script lang="ts">
    import { afterNavigate, beforeNavigate, onNavigate } from "$app/navigation";
    import favicon from "$lib/assets/favicon.svg";
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

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>
    @view-transition {
        navigation: auto;
    }

    /* Basic crossfade */
    ::view-transition-old(root),
    ::view-transition-new(root) {
        animation-duration: 0.3s;
    }

    ::view-transition-old(root) {
        animation-name: fade-out;
    }

    ::view-transition-new(root) {
        animation-name: fade-in;
    }

    @keyframes fade-out {
        to {
            opacity: 0;
        }
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
    }
</style>
