<template>
  <div class="wrapper flex flex-col justify-center items-end">
    <div class="wrapper__body bg-white px-6 flex justify-center items-center">
      <div class="w-full">
        <h1
          class="mb-6 text-white text-center text-2xl font-semibold uppercase"
        >
          Register
        </h1>
        <form ref="form" class="w-full" @submit.prevent="onRegister">
          <div
            class="flex items-center border-2 border-slate-400 focus:border-slate-100 mb-8 py-2 px-3 rounded-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              id="fullname"
              v-model="user.fullname"
              class="pl-2 w-full outline-none border-none bg-transparent text-white"
              type="fullname"
              name="fullname"
              placeholder="Fullname"
            />
          </div>
          <div
            class="flex items-center border-2 border-slate-400 focus:border-slate-100 mb-8 py-2 px-3 rounded-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              id="username"
              v-model="user.username"
              class="pl-2 w-full outline-none border-none bg-transparent text-white"
              type="username"
              name="username"
              placeholder="Username"
            />
          </div>
          <div
            class="flex items-center border-2 border-slate-400 focus:border-slate-100 mb-8 py-2 px-3 rounded-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              id="email"
              v-model="user.email"
              class="pl-2 w-full outline-none border-none bg-transparent text-white"
              type="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div
            class="flex items-center border-2 border-slate-400 focus:border-slate-100 mb-12 py-2 px-3 rounded-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              id="password"
              v-model="user.password"
              class="pl-2 w-full outline-none border-none bg-transparent text-white"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            class="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
          >
            Register
          </button>
          <p class="text-center mt-4 text-gray-500">
            Already have a account?
            <NuxtLink class="text-gray-200 font-medium" to="/auth/login"
              >Login</NuxtLink
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        fullname: '',
        username: '',
        email: '',
        password: '',
      },
    }
  },
  head() {
    return {
      title: 'Register',
    }
  },
  methods: {
    async onRegister() {
      // eslint-disable-next-line no-console
      try {
        // eslint-disable-next-line no-console
        await this.$axios.$post(
          'http://localhost:1337/api/auth/local/register',
          {
            fullname: this.user.fullname,
            username: this.user.username,
            email: this.user.email,
            password: this.user.password,
          }
        )

        await this.$router.push('/auth/login')

        // eslint-disable-next-line no-console
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
  },
}
</script>

<style scoped>
.wrapper {
  background-image: url('/images/bg-goalkeeper.png');
  background-position: -50px 0;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.wrapper__body {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.744);
}

@media only screen and (min-width: 768px) {
  .wrapper__body {
    width: 344px;
    background-color: rgba(0, 0, 0, 0.533);
  }
}

@media only screen and (min-width: 1024px) {
  .wrapper {
    background-position: 0 0;
  }
  .wrapper__body {
    width: 464px;
    background-color: rgba(255, 255, 255, 0.143);
  }
}
</style>
