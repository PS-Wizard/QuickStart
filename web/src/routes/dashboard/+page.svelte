<script>
    import { animate } from "motion";

    let { data } = $props();

    function animateMe(el) {
        animate(el, {
            opacity: [0, 1],
            y: [100, 0],
        });
    }
</script>

<div
    class="prose mx-auto flex justify-center items-center h-screen flex-col"
    {@attach animateMe}
>
    <h1 class="satoshi font-medium">Welcome {data.user?.email}</h1>
    <form method="POST" action="/logout">
        <button type="submit">Logout</button>
    </form>
</div>
