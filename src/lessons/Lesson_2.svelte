<script>
    let number = 0;
    let position = { x: 0, y: 0 };
    let buttonText = 'Change';

    function increment() {
        number++;
    }

    function changeButtonText(text) {
        buttonText = text;
    }
</script>

<h1>Lesson 2</h1>

<div class="intro">
    Fix all tests of this lesson. Use as much as possible from the <i>script</i> block, but do not change it.
</div>

<p class="box">
    <button id="incBtn" class="large">Number</button>
</p>

<p class="box">
    <button id="textBtn" class="large" on:click={changeButtonText}>{buttonText}</button>
</p>

<div id="hover-area" class="box" on:mousemove={(evt) => console.log(evt)}>
    Position {position.x} / {position.y}
</div>

<style>
    .large {
        padding: 20px;
    }

    #hover-area {
        background-color: lightblue;
        width: 300px;
        height: 300px;
    }
</style>
