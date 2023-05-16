<script>
    import { onMount } from 'svelte';
    let navigationTarget;

    onMount (async () => {
        let navigationSvelteComponent = (await import("remote_navigation/Navigation")).default;
        new navigationSvelteComponent({
            target: navigationTarget
        });
    });
</script>

<div id="remote-navigation-component" bind:this={navigationTarget} ></div>

<div id="remote-main-content-component" style="margin-left: 300px">
    <slot></slot>
</div>
