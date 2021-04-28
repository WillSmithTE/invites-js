const BASE_URL = process.env.NODE_ENV === 'development' ?
    'http://localhost:8080' : 'https://ski-be-hgfltltt5a-de.a.run.app'

export const rsvpApi = {
    add: async (rsvp) => {
        const response = await fetch(
            `${BASE_URL}/api/rsvp`,
            {
                method: 'POST',
                body: JSON.stringify(rsvp),
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json'
                },
            
            },
        );
        const jsonResponse = await response.json();
        return jsonResponse;
    }
};