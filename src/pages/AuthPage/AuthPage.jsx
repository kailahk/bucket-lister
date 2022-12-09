import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
    const [showAuthPage, setShowAuthPage] = useState(true)

    return (
        <main>
            <h1>AuthPage</h1>
            {showAuthPage ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser} />}
            {showAuthPage ? 'Already have an account?' : "Don't have an account yet?"}
            <br />
            <button onClick={() => setShowAuthPage(!showAuthPage)}>
                {showAuthPage ? 'Login' : 'Sign Up'}
            </button>
        </main>
    );
}