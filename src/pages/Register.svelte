<script>
    import axios from 'axios';
    import {push} from 'svelte-spa-router'

    let first_name = '', last_name = '', email = '', password = '', password_confirm = '';

    const submit = async () => {
        await axios.post('register', {
            first_name,
            last_name,
            email,
            password,
            password_confirm
        });

        await push('/login');
    }
</script>

<main class="form-signin">
    <form on:submit|preventDefault={submit}>
        <h1 class="h3 mb-3 font-normal">Please register</h1>

        <label class="sr-only">First Name</label>
        <input bind:value={first_name} class="form-control" placeholder="First Name" required autofocus>

        <label class="sr-only">Last Name</label>
        <input bind:value={last_name} class="form-control" placeholder="Last Name" required autofocus>

        <label class="sr-only">Email address</label>
        <input bind:value={email} type="email" class="form-control" placeholder="Email address" required autofocus>

        <label class="sr-only">Password</label>
        <input bind:value={password} type="password" class="form-control" placeholder="Password" required>

        <label class="sr-only">Password Confirm</label>
        <input bind:value={password_confirm} type="password" class="form-control" placeholder="Password Confirm" required>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
    </form>
</main>