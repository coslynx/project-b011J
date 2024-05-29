const reputationSystem = {
  users: [],
  
  addUser: function(user) {
    this.users.push(user);
  },

  removeUser: function(userId) {
    this.users = this.users.filter(user => user.id !== userId);
  },

  getUserById: function(userId) {
    return this.users.find(user => user.id === userId);
  },

  increaseReputation: function(userId, amount) {
    const user = this.getUserById(userId);
    if (user) {
      user.reputation += amount;
    }
  },

  decreaseReputation: function(userId, amount) {
    const user = this.getUserById(userId);
    if (user) {
      user.reputation -= amount;
    }
  },

  resetReputation: function(userId) {
    const user = this.getUserById(userId);
    if (user) {
      user.reputation = 0;
    }
  },

  getTopUsers: function(numUsers) {
    return this.users.sort((a, b) => b.reputation - a.reputation).slice(0, numUsers);
  }
};

module.exports = reputationSystem;