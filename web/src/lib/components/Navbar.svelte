<script lang="ts">
    import type { RecordModel } from "pocketbase";
    let { user } = $props<{ user: RecordModel | null }>();
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start">
        <a class="geist uppercase text-xl font-semibold" href="/dashboard"
            >Quick.Start</a
        >
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
    <div class="navbar-end flex gap-2">
        {#if !user}
            <a class="btn btn-sm btn-ghost" href="/register">Sign Up</a>
            <a class="btn btn-primary btn-sm" href="/login">Login</a>
        {:else}
            <div class="avatar">
                <div class="w-9 rounded-lg">
                    <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.email || "User")}&background=random`}
                        alt={user.email || "User avatar"}
                    />
                </div>
            </div>
        {/if}
    </div>
</div>
