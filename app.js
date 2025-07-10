const supabaseUrl = "https://ewxvgofivmiotditmuke.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3eHZnb2Zpdm1pb3RkaXRtdWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzg0OTYsImV4cCI6MjA2NzAxNDQ5Nn0.z_5oUSF93FdjE6fh9lu5BjNAkLd4xcg3xjfm8RbTHB4";

const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey)
console.log(createClient)
console.log(client);


// signup functionality
const signupBtn = document.getElementById("signup-btn");
signupBtn && signupBtn.addEventListener("click", function () {
    const signupEmail = document.getElementById("signup-email");
    const signupPassword = document.getElementById("signup-password");



    if (signupEmail && signupPassword) {
        console.log(signupEmail, signupPassword)

        async function sigupUser() {
            try {
                const loader = document.getElementById("loader")
                loader.style.display = "block"
                const { data, error } = await client.auth.signUp({
                    email: signupEmail,
                    password: signupPassword,
                })
                loader.style.display = "none"
                console.log(data)
                console.log(error);
                
                // navigate to login page

                window.location.href = "login.html";
            }
            catch (error) {
                console.log(error.message)

                switch (error.message) {
                    case "Unable to validate email address: invalid format":
                        console.log("hello")
                        alert("please give us the right format of email address");
                        break;
                }

            }



        }
        sigupUser()


    }

    else {
        alert("please fill fields");
    }


})



//login functionality


const loginBtn = document.getElementById("login-btn")
loginBtn && loginBtn.addEventListener("click", function () {
    const loginEmail = document.getElementById("login-email")
const loginPassword = document.getElementById("login-password")




if (loginEmail && loginPassword) {
    console.log(loginEmail, loginPassword)

    async function loginUser() {
        try {
            const loader = document.getElementById("loader")
            loader.style.display = "block"
            const { data, error } = await client.auth.signInWithPassword({
                email: loginEmail.value,
                password: loginPassword.value,
            })
            loader.style.display = "none"
            if (error) {
                console.log(error.message)
            }
            else {
                console.log(data)
                alert("user created successsfully")
            }

            window.location.href = "home.html"
        }
        catch (error) {
            console.log(error)
            console.log(error.message)

            switch (error.message) {
                case "Unable to validate email address: invalid format":
                    console.log("hello")
                    alert("please give us the right format of email address");
                    break;
            }

        }



    }
    loginUser()


}

else {
    alert("please fill fields")
}


})