<script>
    import axios from 'axios';
    import {push} from 'svelte-spa-router'

    let password = '', password_confirm = '';

    export let params;

    const submit = async () => {
        await axios.post('reset', {
            token: params.token,
            password,
            password_confirm
        });

        await push('/login');
    }
</script>

<main class="form-signin">
    <form on:submit|preventDefault={submit}>
        <h1 class="h3 mb-3 font-normal">Please reset your password</h1>

        <div class="form-floating">
            <label class="sr-only">Password</label>
            <input bind:value={password} type="password" class="form-control" placeholder="Password" required>
        </div>

        <div class="form-floating">
            <label class="sr-only">Password Confirm</label>
            <input bind:value={password_confirm} type="password" class="form-control" placeholder="Password Confirm" required>
        </div>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
    </form>
</main>