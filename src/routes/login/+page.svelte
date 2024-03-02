<form method="POST" action="?/login">
    <div class="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-blue-100 to-blue-300">
        <div class="shadow-2xl flex flex-col justify-center items-center p-7 border-2 rounded-3xl bg-white">
            <div class="text-4xl font-bold text-center">Login</div>
            <div class="mt-4">
                <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        class="rounded-lg p-2 m-6 text-2xl border-2"
                />
            </div>
            <div class="mt-3">
                <button type="submit" class="bg-blue-500 text-white rounded-lg p-4 w-full text-2xl border-2"
                >Login
                </button>
            </div>
        </div>

    </div>
</form>
