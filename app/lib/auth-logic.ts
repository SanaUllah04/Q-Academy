export type AuthResult = {
    success: boolean;
    message: string;
    user?: {
        email: string;
        name?: string;
    };
};

export async function login(formData: FormData): Promise<AuthResult> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { success: false, message: 'Please provide both email and password.' };
    }

    if (password.length < 6) {
        return { success: false, message: 'Password must be at least 6 characters.' };
    }

    // Simulate successful login
    return {
        success: true,
        message: 'Login successful!',
        user: { email }
    };
}

export async function register(formData: FormData): Promise<AuthResult> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!name || !email || !password) {
        return { success: false, message: 'Please provide name, email, and password.' };
    }

    if (password.length < 6) {
        return { success: false, message: 'Password must be at least 6 characters.' };
    }

    // Simulate successful registration
    return {
        success: true,
        message: 'Registration successful! Please sign in.',
        user: { email, name }
    };
}
