<script>
    import Box from './Box.svelte';

    let myText = 'Hey!';

    function changeText() {
        myText = 'Bla';
    }
</script>

<h1>Lesson 7</h1>

<div class="intro">
    Fix all tests of this lesson. Use as much as possible from the <i>script</i> block and change only the html part here
    and Box.svelte.
</div>

<button on:click={changeText} style="margin-top:20px">change text</button>

<Box text={myText} on:click={changeText} />
