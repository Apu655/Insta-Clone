
import {getProviders, signIn as SignIntoProvider} from 'next-auth/react'



const signIn= ({providers}:any) => {
  return (
    <>
    {Object.values(providers).map((provider:any) => (
      <div key={provider.name}>
        <button onClick={() => SignIntoProvider(provider.id)}>
          Sign in with {provider.name}
        </button>
      </div>
    ))}
  </> 
  );
}
export async function getServerSideProps(){
    const providers = await getProviders()
    //console.log("PRovider is here!!",providers)
    return {
        props:{
            providers, 
        }
    }
}
export default signIn;
