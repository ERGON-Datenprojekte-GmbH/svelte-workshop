<script>
    let text = 'Hello';
    let number = 0;
    let isChecked = false;
    let selected = '';
</script>

<h1>Lesson 3</h1>

<div class="intro">
    Fix all tests of this lesson. Use as much as possible from the <i>script</i> block, but do not change it.
</div>

<div class="box">
    <div id="text">{text}</div>
    <input id="textInput" type="text" bind:value={text} />
</div>

<div class="box">
    <input id="number1" type="number" min="0" max="10" bind:value={number} />
    <input id="number2" type="range" min="0" max="10" bind:value={number} />
</div>

<div class="box">
    <div id="checkedText">Checked: {isChecked}</div>
    <input id="checkbox" type="checkbox" bind:checked={isChecked} />
</div>

<div class="box">
    <div id="selectedText">Selected: {selected}</div>

    <select id="select" bind:value={selected}>
        <option value="">-</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
</div>
