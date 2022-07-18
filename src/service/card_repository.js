import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

class CardRepository {
  constructor(firebaseApp) {
    this.db = getDatabase(firebaseApp);
  }
  saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }
  removeCard(userId, card) {
    remove(ref(this.db, `${userId}/cards/${card.id}`));
  }

  syncCard(userId, onUpdate) {
    const query = ref(this.db, `${userId}/cards`);
    onValue(query, (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => off(query);
  }
}

export default CardRepository;
