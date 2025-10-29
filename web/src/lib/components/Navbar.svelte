<script lang="ts">
    import type { RecordModel } from "pocketbase";
    let { user } = $props<{ user: RecordModel | null }>();
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start">
        <a
            class="geist uppercase text-xl font-semibold"
            href={user ? "/dashboard" : "/"}>Quick.Start</a
        >
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
            <li><a href="/">Some Page</a></li>
            <li><a href="/">Some Other Page</a></li>
        </ul>
    </div>
    <div class="navbar-end flex gap-2">
        {#if !user}
            <a class="btn btn-sm btn-ghost" href="/auth/register">Sign Up</a>
            <a class="btn btn-primary btn-sm" href="/auth/login">Login &nearr;</a>
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
