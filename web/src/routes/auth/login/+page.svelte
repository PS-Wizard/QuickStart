<script lang="ts">
    import { enhance } from "$app/forms";

    let { form } = $props<{ form?: { error?: string } | null }>();
</script>

<h1>Login</h1>

<form method="POST" use:enhance>
    {#if form?.error}
        <p style="color: red">{form.error}</p>
    {/if}

    <input type="email" name="email" placeholder="Email" required />
    <input type="password" name="password" placeholder="Password" required />
    <button type="submit">Login</button>
</form>

<a href="/register">Don't have an account? Register</a>
