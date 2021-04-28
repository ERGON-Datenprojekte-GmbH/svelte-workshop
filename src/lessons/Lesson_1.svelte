<script>
    let myClass = 'colorful';
    let text = 'Hello';
    let number1 = 3;
    let number2 = 5;
    let fontSize = 30;
</script>

<h1>Lesson 1</h1>

<div class="intro">
    Fix all tests of this lesson. Use as much as possible from the <i>script</i> block, but do not change it.
</div>

<p data-test="block-1" class="box {myClass}">
    {text}
</p>

<p data-test="block-2" class="box" style="font-size: {fontSize}px;">Sum: {number1 + number2}</p>

<p data-test="block-3" class="box" title={text}>Title-Test</p>

<p data-test="block-4">
    {text.toUpperCase()}
</p>

<style>
    .colorful {
        background-color: #451212;
    }
</style>
