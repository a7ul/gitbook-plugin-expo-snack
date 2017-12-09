module.exports = {
  // Map of hooks
  hooks: {},

  // Map of new blocks
  blocks: {
    exposnack: {
      process: function(block) {
        return "Hello , How are you?";
      }
    }
  },
  // Map of new filters
  filters: {}
};
