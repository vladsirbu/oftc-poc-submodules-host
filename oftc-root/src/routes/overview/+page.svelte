<script>
    import { GasComponent } from "oftc-gas";
    import { goto } from '$app/navigation';
    import { ElectricityComponent } from "oftc-electricity";

    function navigate(event) {
        goto(`/${event.detail}`)
    }
</script>

<div id="gas-component">
    <GasComponent on:navigate={navigate} currentCurrency='€'/>
</div>

<hr>

<div id="electricity-component">
    <ElectricityComponent />
</div>

<style>
    #gas-component {
        margin-bottom: 40px;
    }

    #electricity-component {
        margin-top: 40px;
    }
</style>