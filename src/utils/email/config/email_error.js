export const emailError = (error)=>{

     if (error && error.statusCode !== undefined) {
            console.error('Freesend error:', error.message);
            console.error('Status code:', error.statusCode);
        } else {
            console.error('Unexpected error:', error);
        }
}