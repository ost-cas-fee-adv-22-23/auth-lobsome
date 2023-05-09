import { signIn, signOut } from 'next-auth/react';

export default function Login() {
    return <>
        <div className="flex w-full">
            <button className="bg-amber-500 p-2 rounded-xl" onClick={() => signIn('zitadel', { callbackUrl: '/' })}>Login with Zitadel</button>
        </div>
    </>
}