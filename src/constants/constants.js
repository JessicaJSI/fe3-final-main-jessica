const baseSx = (state) => ({
    backgroundColor: `${state.isDark? 'var(--card-dark-color)' : 'var(--card-light-color)'}`,
    color: `${state.isDark? 'var(--dark-mode-font-color)' : ''}`
});

const SERVICE_URL = "https://jsonplaceholder.typicode.com/users";

export {baseSx, SERVICE_URL};