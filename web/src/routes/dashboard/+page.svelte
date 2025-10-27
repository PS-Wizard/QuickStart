<script lang="ts">
    let { data } = $props();
</script>

<div class="prose mx-auto flex justify-center items-center h-screen flex-col">
    <h1 class="geist font-semibold">Welcome {data.user?.email}</h1>
    <form method="POST" action="/logout" class="flex gap-4">
        <button type="submit" class="btn btn-primary">Logout</button>
    </form>
</div>
