export default {
  date: (data) => {
    const raw = data.date;
    if (typeof raw === 'string') {
      const match = raw.match(/(\d{4}-\d{2}-\d{2})/);
      if (match) {
        return match[1];
      }
    }
    return raw;
  }
};


