<script>
    import { page } from '$app/stores';
    import {onMount} from "svelte";

    const url = $page.url;
    let currencyParameter = url.searchParams.get('currency');

    onMount(() => {
        let currencySelection = document.getElementById('currencySelection');

        for(let i, j = 0; i = currencySelection.options[j]; j++) {
            if(i.value == currencyParameter) {
                currencySelection.selectedIndex = j;
                break;
            }
        }
    })
</script>

<h1>Welcome to the settings Page</h1>

<div>
    <label for="currencySelection">Current currency:</label>
    <select name="currencySelection" id="currencySelection">
        <option value="€">Euro</option>
        <option value="$">Dollar</option>
    </select>
</div>