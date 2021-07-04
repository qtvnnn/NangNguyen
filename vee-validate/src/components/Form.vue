<template>
  <div>
    <h2>Form Validation</h2>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider name="Title" rules="required" v-slot="{ errors }">
          <div class="form-group">
            <label>Title: </label>
            <input type="text" class="form-control" v-model="title"><br>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="First Name" rules="required|alpha" v-slot="{ errors }">
          <div class="form-group">
            <label>First Name: </label>
            <input type="text" class="form-control" v-model="firstName"><br>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Last Name" rules="required|alpha" v-slot="{ errors }">
          <div class="form-group">
            <label>Last Name: </label>
            <input type="text" class="form-control" v-model="lastName"><br>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Dob" rules="required|regex:(\d{4})-(\d{2})-(\d{2})" v-slot="{ errors }">
          <div class="form-group">
            <label>Dob: </label>
            <input type="text" class="form-control" v-model="dob"><br>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="E-Mail" rules="required|email" v-slot="{ errors }">
          <div class="form-group">
            <label>Email: </label>
            <input type="email" class="form-control" v-model="email"><br>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Password" rules="required|min:6" v-slot="{ errors }" vid="password">
          <div class="form-group">
            <label>Password: </label>
            <input type="password" class="form-control" v-model="password"><br>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Confirm Password" rules="required|confirmed:password" v-slot="{ errors }">
          <div class="form-group">
            <label>Confirm Password: </label>
            <input type="password" class="form-control" v-model="confirmPassword"><br>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider name="Accept Term" rules="required" v-slot="{ errors }">
          <div class="form-group">
            <input type="checkbox" v-model="acceptTerms">
            <label>Accept Term</label><br>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <input type="submit" tect="Submit">
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      title: "",
      firstName: "",
      lastName: "",
      dob: '',
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: null,
    };
  },
  methods: {
    onSubmit() {
      console.log(this.formData);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
