<script lang="ts">
    import { goto, invalidateAll } from "$app/navigation";
    import { animate, inView } from "motion";

    let { data } = $props();

    async function handleLogout() {
        await fetch("/auth/logout", { method: "POST" });
        await invalidateAll();
        goto("/auth/login");
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

<h1 class="text-[16rem] clash morganite font-bold uppercase text-center">
    Dashboard
</h1>
<div class="mx-auto flex justify-center items-center flex-col gap-8">
    <h1 class="uppercase text-4xl">Welcome {data.user?.email}</h1>
    <button onclick={handleLogout} class="btn btn-primary">Logout</button>
</div>

<div class="container-12">
    <div class="grid-12 gap-4 md:gap-6">
        <div class="col-span-12 md:col-span-6 lg:col-span-4">
            <h1 class="heading text-6xl">Title</h1>
            <p class="text">Some readable text here</p>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-4">
            <h1 class="heading text-6xl">Title</h1>
            <p class="text">Some readable text here</p>
        </div>
    </div>
</div>
