<script>
    export let text;
    export let title = 'This is a box';
</script>

<div {title} class="box" on:click>{text}</div>
