<script>
    import Home from "./pages/Home.svelte"
    import Login from "./pages/Login.svelte"
    import Register from "./pages/Register.svelte";
    import Router, {link} from 'svelte-spa-router'
    import {onMount} from "svelte";
    import axios from "axios";

    const routes = {
        '/': Home,
        '/login': Login,
        '/register': Register
    };

    let auth = false;

    onMount(async () => {
        await axios.get('user').then(res => {
            if (res.status === 200) {
                console.log(res)
                auth = true;
            }
            auth = false;
        }).catch(e => {
        });
    });

    $: logout = async () => {
        await axios.post('logout', {}, {withCredentials: true});
    }
</script>

<header class="p-3 bg-dark text-white">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/" use:link class="nav-link px-2 text-white">Home</a></li>
            </ul>

            {#if auth}
                <div class="ml-auto">
                    <a href="/login" use:link class="btn btn-outline-light me-2"
                        on:click={logout}
                    >Logout</a>
                </div>
            {:else }
                <div class="ml-auto">
                    <a href="/login" use:link class="btn btn-outline-light me-2">Login</a>
                    <a href="/register" use:link class="btn btn-outline-light me-2">Register</a>
                </div>
            {/if}
        </div>
    </div>
</header>

<Router {routes}/>