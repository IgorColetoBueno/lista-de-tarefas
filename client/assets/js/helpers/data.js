function toMySQLDateTime(data) {
    return data.toISOString().slice(0, 19).replace('T', ' ');
  }