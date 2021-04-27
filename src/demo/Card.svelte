<script>
    let einWert = 42;
</script>

<div class="card">
    <div class="header">
        <slot name="header" {einWert}>HEADER {einWert}</slot>
    </div>

    <div class="body">
        <slot />
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        padding: 10px;
        width: 300px;
        height: 300px;
    }

    .header {
        background-color: slategray;
        color: white;
        padding: 4px;
    }

    .body {
        flex: 1;
        margin-top: 10px;
        background-color: lightblue;
        padding: 4px;
    }
</style>
