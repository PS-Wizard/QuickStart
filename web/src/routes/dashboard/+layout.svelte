<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    let { children, data } = $props();

    onMount(() => {
        if (!data.user) {
            goto("/login");
        }
    });
</script>

{#if data.user}
    {@render children?.()}
{:else}
    <div class="flex items-center justify-center min-h-screen">
        <span class="loading loading-spinner loading-lg"></span>
    </div>
{/if}
