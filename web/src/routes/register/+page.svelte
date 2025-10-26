<script lang="ts">
    import { enhance } from "$app/forms";

    let { form } = $props<{ form?: { error?: string } | null }>();
</script>

<h1>Register</h1>

<form method="POST" use:enhance>
    {#if form?.error}
        <p style="color: red">{form.error}</p>
    {/if}

    <input type="email" name="email" placeholder="Email" required />
    <input type="password" name="password" placeholder="Password" required />
    <input
        type="password"
        name="passwordConfirm"
        placeholder="Confirm Password"
        required
    />
    <button type="submit">Register</button>
</form>

<a href="/login">Already have an account? Login</a>
