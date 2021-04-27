<script>
    let items = [
        { id: 1, text: 'One' },
        { id: 2, text: 'Two' },
    ];

    let a = 1;
    let b = 1;

    function changeNumber() {
        b++;
    }

    // -------- change line --------

    let sum = a + b;

    function addItem() {
        items.push({ id: items.length + 1, text: 'NEW' });
    }

    function updateItem(item) {
        item.text = 'CHANGED';
    }
</script>

<h1>Lesson 5</h1>

<div class="intro">
    Fix all tests of this lesson. Use as much as possible from the <i>script</i> block and change it only below the change line.
</div>

<div class="box" id="items">
    <button on:click={addItem}>Add</button>

    {#each items as item}
        <p>
            <span>
                {item.text}
            </span>
            <button>Change</button>
        </p>
    {/each}
</div>

<div class="box">
    <button on:click={changeNumber}>Increment</button>

    <p>a: {a}</p>
    <p>b: {b}</p>
    <p id="sum">Summe: {sum}</p>
</div>

<style>
    .box {
        margin-top: 15px;
        padding: 20px;
        border: 1px solid black;
    }
</style>
