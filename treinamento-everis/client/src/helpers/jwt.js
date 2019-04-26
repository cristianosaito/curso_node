export const parseJwt = (token) => {
	return token ? JSON.parse(window.atob(token.split('.')[1].replace('-', '+').replace('_', '/'))) : ''
}
