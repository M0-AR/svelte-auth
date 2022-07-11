<script>
    import axios from 'axios';
    import {push} from 'svelte-spa-router'

    let email = '', password = '';

    $: submit = async () => {
        const {data} = await axios.post('login', {
            email,
            password
        }, {withCredentials: true});

        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

        await push('/');
    }
</script>

<main class="form-signin">
    <form on:submit|preventDefault={submit}>
        <h1 class="h3 mb-3 font-normal">Please register</h1>

        <label class="sr-only">Email address</label>
        <input bind:value={email} type="email" class="form-control" placeholder="Email address" required autofocus>

        <label class="sr-only">Password</label>
        <input bind:value={password} type="password" class="form-control" placeholder="Password" required>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
    </form>
</main>
