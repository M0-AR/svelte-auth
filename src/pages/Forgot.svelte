<script>
    import axios from "axios";

    let email = '', cls = '', message = '';

    $: submit = async () => {
        const {status} = await axios.post('forgot', {email})

        if (status === 200) {
            cls = 'success';
            message = 'Email was sent!';
            console.log(cls);
        } else {
            cls = 'danger';
            message = 'Email does not exists!';
            console.log(cls);
        }
    }
</script>

<main class="form-signin">
    {#if cls}
        <div class={`alert alert-${cls}`} role="alert">
            {message}
        </div>
    {/if}

    <form on:submit|preventDefault={submit}>
        <h1 class="h3 mb-3 font-normal">Please insert your email</h1>

        <div class="form-floating">
            <label class="sr-only">Email address</label>
            <input bind:value={email} type="email" class="form-control" placeholder="Email address" required autofocus>
        </div>

        <button class="btn btn-lg btn-primary btn-block mt-3" type="submit">Submit</button>
    </form>
</main>
