<script lang="ts">
    import type { RecordModel } from "pocketbase";
    let { user } = $props<{ user: RecordModel | null }>();
</script>

<nav class="bg-base-100 py-4">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
        <div class="grid grid-cols-12 gap-4 items-center">
            <!-- Logo -->
            <div class="col-span-6 lg:col-span-3">
                <a
                    class="geist uppercase text-xl font-semibold"
                    href={user ? "/dashboard" : "/"}
                >
                    Quick.Start
                </a>
            </div>

            <!-- Nav links -->
            <div class="hidden lg:col-span-6 lg:flex justify-center">
                <ul class="flex gap-6">
                    <li><a href="/">Link 1</a></li>
                    <li><a href="/">Link 2</a></li>
                </ul>
            </div>

            <!-- Auth -->
            <div class="col-span-6 lg:col-span-3 flex gap-2 justify-end">
                {#if !user}
                    <a class="btn btn-sm btn-ghost invisible md:visible" href="/auth/register"
                        >Sign Up</a
                    >
                    <a class="btn btn-primary btn-sm" href="/auth/login"
                        >Login &nearr;</a
                    >
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
    </div>
</nav>
