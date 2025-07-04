const projectUrl = "https://ewxvgofivmiotditmuke.supabase.co";
const projectKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3eHZnb2Zpdm1pb3RkaXRtdWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzg0OTYsImV4cCI6MjA2NzAxNDQ5Nn0.z_5oUSF93FdjE6fh9lu5BjNAkLd4xcg3xjfm8RbTHB4";

const { createClient } = supabase;
const client = createClient(projectUrl, projectKey);

console.log(createClient);
console.log(client);


const signupBtn = document.getElementById("signup-btn");

signupBtn.addEventListener("click", () => {
    const signupEmail = document.getElementById("signup-email").value;
    const signupPass = document.getElementById("signup-password").value;

    async function signupUser() {
        const { data, error } = await client.auth.signUp(
            {
                email: signupEmail,
                password: signupPass
            }
        )
        if(error){
           console.log(error.message);
            
        }

        else{
            console.log(data);
        }
        
    }
    
    signupUser();
})



