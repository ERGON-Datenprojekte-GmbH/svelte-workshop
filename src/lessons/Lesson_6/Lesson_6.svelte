<script>
    import { onMount } from 'svelte';
    import { getData } from './service';

    let items = [];
    let height = 0;

    function moveToBody(element) {
        document.body.appendChild(element);
    }

    // -------- change line --------

    let intro;

    onMount(async () => {
        items = await getData();
        height = intro.getBoundingClientRect().height.toFixed(0);
    });
</script>

<h1>Lesson 6</h1>

<div class="intro" bind:this={intro}>
    Fix all tests of this lesson. Use as much as possible from the <i>script</i> block and change it only below the change
    line.
</div>

<div id="items" class="box">
    {#each items as item}
        <p>{item}</p>
    {/each}
</div>

<div class="box" style="position:relative">
    <div class="flyout" use:moveToBody>Hello!</div>
</div>

<div class="box" id="height">Intro-Box height: {height}</div>

<style>
    .flyout {
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        height: 70px;
        background-color: lightseagreen;
    }
</style>
