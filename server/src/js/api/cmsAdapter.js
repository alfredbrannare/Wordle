const API_WORDS = 'https://raw.githubusercontent.com/dwyl/english-words/refs/heads/master/words_dictionary.json';

export const cmsAdapter = {
    loadWords: async () => {
        try {
            const res = await fetch(API_WORDS);
            const payload = await res.json();
            return payload;
        } catch (error) {
            console.error('Error fetching words:', error);
            return [];
        }
    }
}