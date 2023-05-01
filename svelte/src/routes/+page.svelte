<script >
    import axios from "axios";

    //import axios from "axios"
    import { onMount } from "svelte";
    onMount(function e(){axios.get("http://20.215.145.154:8080/",{url:"http://20.215.145.154:8080/"}).then(res=>{console.log(res)}).catch(err=>{console.log(err)})})
</script>

<h1>WELCOMEa</h1>

<a href="about">
    <h1>ROUTER</h1>
</a>
