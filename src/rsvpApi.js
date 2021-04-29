const BASE_URL = process.env.NODE_ENV === 'development' ?
    'http://localhost:8080' : 'https://rsvp-yo-4lec554gkq-as.a.run.app'

export const rsvpApi = {
    add: async (rsvp) => {
        await fetch(
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
    }
};