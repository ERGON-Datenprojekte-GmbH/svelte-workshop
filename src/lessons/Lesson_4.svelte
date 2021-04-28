<script>
    let show = false;

    let items = ['One', 'Two', 'Three'];

    function addItem() {
        items = [...items, 'NEW'];
    }
</script>

<h1>Lesson 4</h1>

<div class="intro">
    Fix all tests of this lesson. Use as much as possible from the <i>script</i> block, but do not change it.
</div>

<div id="show" class="box">
    <button id="toggle" on:click={() => (show = !show)}>Toggle</button>
    {#if show}
        <div>Monkey</div>
    {:else}
        <div>Banana</div>
    {/if}
</div>

<div id="items" class="box" class:colorful={items.length > 3}>
    <button id="addItem" on:click={addItem}>Add Item</button>
    {#each items as item}
        <p>{item}</p>
    {/each}
</div>

<style>
    .box {
        margin-top: 15px;
        padding: 20px;
        border: 1px solid black;
    }

    .colorful {
        background-color: #6b41c7;
    }
</style>
