<script lang="ts">
    import { Route, router } from 'tinro';

    import Lesson_1 from './lessons/Lesson_1.svelte';
    import Lesson_2 from './lessons/Lesson_2.svelte';
    import Lesson_3 from './lessons/Lesson_3.svelte';
    import Lesson_4 from './lessons/Lesson_4.svelte';
    import Lesson_5 from './lessons/Lesson_5.svelte';
    import Lesson_6 from './lessons/Lesson_6/Lesson_6.svelte';
    import Lesson_7 from './lessons/Lesson_7/Lesson_7.svelte';
    import Lesson_8 from './lessons/Lesson_8/Lesson_8.svelte';

    import Demo1 from './demo/Demo1.svelte';

    router.mode.hash();
</script>

<Route>
    <Route path="/">
        <h1>Workshop</h1>

        <p><a href="/1">Lesson 1</a></p>
        <p><a href="/2">Lesson 2</a></p>
        <p><a href="/3">Lesson 3</a></p>
        <p><a href="/4">Lesson 4</a></p>
        <p><a href="/5">Lesson 5</a></p>
        <p><a href="/6">Lesson 6</a></p>
        <p><a href="/7">Lesson 7</a></p>
        <p><a href="/8">Lesson 8</a></p>
    </Route>

    <Route path="/1">
        <Lesson_1 />
    </Route>

    <Route path="/2">
        <Lesson_2 />
    </Route>

    <Route path="/3">
        <Lesson_3 />
    </Route>

    <Route path="/4">
        <Lesson_4 />
    </Route>

    <Route path="/5">
        <Lesson_5 />
    </Route>

    <Route path="/6">
        <Lesson_6 />
    </Route>

    <Route path="/7">
        <Lesson_7 />
    </Route>

    <Route path="/8">
        <Lesson_8 />
    </Route>

    <Route path="/demo/*">
        <Route path="/1">
            <Demo1 />
        </Route>
    </Route>
</Route>
