<script >
    import axios from "axios";

    //import axios from "axios"
    import { onMount } from "svelte";
    onMount(function e(){axios.get("http://localhost:80/",{url:"http://localhost:80/"}).then(res=>{console.log(res)}).catch(err=>{console.log(err)})})
</script>

<h1>WELCOMEa</h1>

<a href="about">
    <h1>ROUTER</h1>
</a>
