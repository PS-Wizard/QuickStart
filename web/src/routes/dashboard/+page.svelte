<script lang="ts">
    import { goto, invalidateAll } from "$app/navigation";
    let { data } = $props();

    async function handleLogout() {
        await fetch("/auth/logout", { method: "POST" });
        await invalidateAll();
        goto("/auth/login");
    }

</script>

<h1 class="text-[16rem] clash morganite font-bold uppercase text-center leading-none">
    Dashboard
</h1>
<div class="mx-auto flex justify-center items-center flex-col gap-8">
    <h1 class="uppercase text">Welcome {data.user?.email}</h1>
    <button onclick={handleLogout} class="btn btn-primary">Logout</button>
</div>
<br/>
<img
    src="https://i.redd.it/wss1o9w707i11.jpg"
    class="col-span-4 sm:col-span-8 lg:col-span-12"
    style="view-transition-name:hero-img"
    alt=""
/>
