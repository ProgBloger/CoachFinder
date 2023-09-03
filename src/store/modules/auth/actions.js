export default { 
    async login(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBg82PVd-fBcI0NtR4eLG_o0iqrn-HdWJc', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
                token: 'BFP8WAFxzjrjAygT0r-Mk5lyLGagVD5cxHq6C6iq8LqPAyxMc_yYTmx2CdVjhLfzBGw3nhVNp3uASNti4QSdhoU',
            })
        });

        const responseData = await response.json();

        if(!response.ok) {
            console.log(responseData);
            const error = new Error(responseData.message || 'Failed to authenticate.');
            throw error;
        }

        console.log(responseData);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        });
    },
    async signup(context, payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBg82PVd-fBcI0NtR4eLG_o0iqrn-HdWJc', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
                token: 'BFP8WAFxzjrjAygT0r-Mk5lyLGagVD5cxHq6C6iq8LqPAyxMc_yYTmx2CdVjhLfzBGw3nhVNp3uASNti4QSdhoU',
            })
        });

        const responseData = await response.json();

        if(!response.ok) {
            console.log(responseData);
            const error = new Error(responseData.message || 'Failed to authenticate.');
            throw error;
        }

        console.log(responseData);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        });
    },
    logout(context) {
        context.commit('setUser', {
        token: null,
        userId: null,
        tokenExpiration: null,
        });
    }
 };