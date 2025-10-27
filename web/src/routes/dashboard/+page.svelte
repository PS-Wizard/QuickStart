<script lang="ts">
    import { goto, invalidateAll } from "$app/navigation";
    import { animate, inView } from "motion";

    let { data } = $props();

    async function handleLogout() {
        await fetch("/logout", { method: "POST" });
        await invalidateAll(); // Refresh all load functions
        goto("/login"); // Smooth navigation with view transitions!
    }

    let items = $state([]);
    $effect(() => {
        items.forEach((item, i) => {
            if (!item) return;
            inView(item, () => {
                animate(
                    item,
                    { opacity: [0, 1], x: [-100, 0] },
                    { delay: i * 0.1 },
                );
            });
        });
    });
</script>

<div class="prose">
    <h1 class="font-semibold w-fit">Welcome {data.user?.email}</h1>
    <button onclick={handleLogout} class="btn btn-primary">Logout</button>
</div>
