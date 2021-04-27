<script>
    import { onDestroy } from 'svelte';

    import { info } from './myStore';

    let infoText = '';
    let unsubscribe = info.subscribe((value) => (infoText = value));

    onDestroy(() => {
        unsubscribe();
    });
</script>

<h1>Lesson 8</h1>

<div class="intro">
    Fix all tests of this lesson. Use as much as possible from the <i>script</i> block.
    <p><b>Addition: Simplify the usage of <i>info</i>.</b></p>
</div>

<div class="box">
    <button id="change">Change</button>

    <div id="infoText">
        {infoText}
    </div>
</div>
